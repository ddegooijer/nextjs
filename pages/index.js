import gql from 'graphql-tag';
import {withUrqlClient, initUrqlClient} from 'next-urql';
import {ssrExchange, dedupExchange, cacheExchange, fetchExchange, useQuery} from 'urql';
import HeaderHome from "../components/headers/home";

const HOMEPAGE_QUERY = gql`
    query homepage {
        homepage {
            data {
                id
                attributes   {
                    title,
                    header {
                        ... on ComponentHeadersHome {
                            title,
                            tagline,
                            text,
                            media {
                                data {
                                    attributes {
                                        url
                                        alternativeText
                                    }
                                }
                            }
                        }
                    }
                    
                    blocks {
                        ... on ComponentBlocksText {
                            title
                            tagline
                            text
                        }
                    }
                }
            }
        }
    }
`;


function Home() {
    const [res] = useQuery({query: HOMEPAGE_QUERY});

    if (!res.data.homepage) {
        return (<div>404</div>)
    }

    console.log(res.data.homepage);

    return (
        <div>
            <HeaderHome {... res.data.homepage.data.attributes.header} />
        </div>
    )
}

export async function getStaticProps(ctx) {
    const ssrCache = ssrExchange({isClient: false});
    const client = initUrqlClient({
        url: 'https://api.ef2.nl/graphql',
        exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
    });

    // This query is used to populate the cache for the query
    // used on this page.
    await client.query(HOMEPAGE_QUERY).toPromise();

    return {
        props: {
            urqlState: ssrCache.extractData(),
        },
        revalidate: 600,
    };
}

export default withUrqlClient(
    ssr => ({
        url: 'https://api.ef2.nl/graphql',
    }),
    {ssr: false}
)(Home);

