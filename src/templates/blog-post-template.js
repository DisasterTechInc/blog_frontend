import React, { useEffect, useState } from "react";
import { graphql, Link, navigate } from "gatsby";
import { Layout } from "../components/Layout";
import { Breadcrumb } from "components/Breadcrumb";
import { Section } from "../components/Section";
import Placeholder from "assets/images/graphics__blog-page__placeholder.svg";
import { AppButton } from "../components/AppButton";

export default function BlogPost({ data, pageContext }) {
  const allPosts = data?.allWpPost?.nodes;
  const [postDetailsData, setPostDetailsData] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  const [favPosts, setFavPosts] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const favorites = sessionStorage.getItem("favorites");
      const filteredFavorites = JSON.parse(favorites);
      setFavPosts(filteredFavorites);
    }
  }, []);

  useEffect(() => {
    const filterPost = allPosts.filter((post) => post.id === pageContext?.id);
    setPostDetailsData(filterPost[0]);
  }, []);

  useEffect(() => {
    const relatedPosts = allPosts
      .filter(
        (post) =>
          post?.categories?.nodes[0]?.name === pageContext?.category &&
          post?.id !== pageContext?.id
      )
      .slice(0, 3);
    setRelatedPosts(relatedPosts);
  }, []);

  const handlerFavoritePost = (id) => {
    let ids = [...favPosts];

    if (favPosts.includes(id)) {
      console.log("included");
      ids = ids.filter((i) => i !== id);
    } else {
      console.log("not included");
      ids.push(id);
    }

    setFavPosts(ids);
    sessionStorage.setItem("favorites", JSON.stringify(ids));
  };

  return (
    <>
      <Layout name="blog">
        <Breadcrumb>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li className="active d-none d-md-flex">
            {postDetailsData?.slug || ""}
          </li>
        </Breadcrumb>
        <Section sectionClass="blog__details">
          <div className="row align-items-end">
            <div className="col-md-8">
              <h1 className="mb-4 pb-md-3">{postDetailsData?.title}</h1>
              <div className="d-flex align-items-center">
                <span className="blog__category">
                  {postDetailsData?.categories?.nodes[0]?.name}
                </span>
                <span className="blog__date">{postDetailsData?.date}</span>
              </div>
            </div>
            <div className="col-md-4 d-flex mt-4 mt-md-0">
              <div className="ms-md-auto d-flex align-items-center">
                <span className="blog__avatar">
                  <img
                    src={postDetailsData?.author?.node?.avatar?.url}
                    alt=""
                  />
                </span>
                <h6 className="m-0 ms-3 ">
                  Author
                  <span className="d-block weight-600 color-brand">
                    {postDetailsData?.author?.node?.name}
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </Section>
        {(postDetailsData?.featuredImage?.node?.sourceUrl && (
          <div className="blog__banner">
            <img src={postDetailsData?.featuredImage?.node?.sourceUrl} alt="" />
          </div>
        )) ||
          null}
        {(postDetailsData?.content && (
          <Section sectionClass={"mt-4 pt-md-3"}>
            <div
              className="blog__html"
              dangerouslySetInnerHTML={{
                __html: postDetailsData?.content || null,
              }}
            />
          </Section>
        )) ||
          null}
        {(relatedPosts && !!relatedPosts.length && (
          <Section sectionClass={"blog__related"}>
            <hr className="my-4 my-md-5" />
            <div className="d-md-flex align-items-center">
              <h1 className="m-0">Related Articles</h1>
              <AppButton
                className="primary reverse ms-auto mt-3 mt-md-0"
                onClick={() => navigate("/blog")}
              >
                All posts
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ms-2 animate__arrow--right"
                >
                  <path
                    d="M9.41083 15.1248L10.5892 16.3031L16.1783 10.7139L10.5892 5.12476L9.41083 6.30309L12.9883 9.88059H5V11.5473H12.9883L9.41083 15.1248Z"
                    fill="white"
                  />
                </svg>
              </AppButton>
            </div>
            <div className="row">
              {relatedPosts?.map((post) => {
                return (
                  <div className="col-md-6 col-xl-4" key={post?.id}>
                    <div className="blog__list grid">
                      <div className="blog__pic position-relative">
                        {(post?.featuredImage?.node?.sourceUrl && (
                          <div
                            className="blog__pic--content"
                            style={{
                              backgroundImage: `url(
                          ${post?.featuredImage?.node?.sourceUrl}
                        )`,
                            }}
                          ></div>
                        )) || (
                          <div className="blog__pic--placeholder">
                            <img src={Placeholder} alt="" />
                          </div>
                        )}
                        <Link
                          to={`/blog/${post?.slug}`}
                          className="stretched-link"
                        ></Link>
                        <span
                          className="blog__favorite"
                          onClick={() => handlerFavoritePost(post?.id)}
                        >
                          {(favPosts?.includes(post?.id) && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <path
                                d="M13.5 1.5H4.5C3.67275 1.5 3 2.17275 3 3V6.957V7.5V16.5L9 13.071L15 16.5V7.5V6.957V3C15 2.17275 14.3273 1.5 13.5 1.5Z"
                                fill="url(#paint0_linear_509_3674)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_509_3674"
                                  x1="9.00001"
                                  y1="-3.5"
                                  x2="9.00001"
                                  y2="15"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#6366F1" />
                                  <stop offset="0.5" stopColor="#8B5CF6" />
                                  <stop offset="1" stopColor="#D946EF" />
                                </linearGradient>
                              </defs>
                            </svg>
                          )) || (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <path
                                d="M13.5 1.5H4.5C3.67275 1.5 3 2.17275 3 3V6.957V7.5V16.5L9 13.071L15 16.5V7.5V6.957V3C15 2.17275 14.3273 1.5 13.5 1.5ZM13.5 13.9147L9 11.3438L4.5 13.9147V7.5V6.957V3H13.5V6.957V7.5V13.9147Z"
                                fill="#33354D"
                              />
                            </svg>
                          )}
                        </span>
                      </div>
                      <div className="blog__content">
                        <div className="d-flex align-items-center mb-3 flex-shrink-0">
                          <span className="blog__category">
                            {post?.categories?.nodes[0]?.name}
                          </span>
                          <span className="blog__date">{post?.date}</span>
                        </div>
                        <h5 className="flex-grow-1 m-0">
                          <Link to={`/blog/${post?.slug}`}>{post?.title}</Link>
                        </h5>
                        <hr className="flex-shrink-0" />
                        <div className="d-flex align-items-center flex-shrink-0">
                          <span className="blog__avatar">
                            <img src={post?.author?.node?.avatar?.url} alt="" />
                          </span>
                          <h6 className="m-0 ms-3">
                            {post?.author?.node?.name}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Section>
        )) ||
          null}
      </Layout>
    </>
  );
}

export const pageQuery = graphql`
  query AllPostQuery {
    allWpPost(sort: { date: DESC }) {
      nodes {
        author {
          node {
            avatar {
              url
            }
            name
          }
        }
        content
        date(fromNow: true)
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        excerpt
        categories {
          nodes {
            name
          }
        }
        id
        slug
        internal {
          type
        }
      }
    }
  }
`;
