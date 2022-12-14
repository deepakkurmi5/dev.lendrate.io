import styled from "styled-components";

const HeaderWrapper = styled.div`
  .sideNav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1000;
    top: 0;
    border-radius: 0px 12px 12px 0px;
    left: 0;
    overflow-x: hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    transition: 0.2s;
    background: rgba(0, 0, 0, 1);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;

    .small_logo {
      height: 3.8rem;
      width: auto;
    }

    .closeBtn {
      font-size: 40px;
      cursor: pointer;

      .close_icon {
        font-size: 1.8rem;
        color: ${(props) => props.theme.BodyMainColor};
      }
    }

    ul {
      list-style-type: none;

      li {
        a {
          padding: 10px 8px 10px 0px;
          text-decoration: none;
          font-size: 0.9rem;
          color: ${(props) => props.theme.BodyMainColor};
          display: block;
          transition: all 0.2s;
        }
      }
    }

    .Wallet {
      position: relative;

      button {
        background: ${(props) => props.theme.BodySecondaryBg};
        border: none;
        color: ${(props) => props.theme.BodyMainColor};
        font-style: normal;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Nunito Sans", sans-serif;
        font-size: 1rem;
        height: 48px;
        width: 220px;
        padding: 0.5rem 2rem;
        border-radius: 50px;
      }
    }
  }

  .navbar_component {
    background: inherit !important;

    nav {
      padding: 0.3rem 0.8rem;
      justify-content: inherit !important;

      .navbar-brand {
        flex-grow: 0 !important;

        img {
          height: 5rem;
          width: auto;
        }
      }

      .navbar-icon {
        color: ${(props) => props.theme.BodyMainColor};
        display: none;
        font-size: 1.6rem;
        cursor: pointer;
      }

      .left_ui_block {
        display: flex !important;

        .Network_section {
          display: none;

          .Network_btn {
            background: ${(props) => props.theme.BodySecondaryBg};
            padding: 0.5rem 2rem;
            border-radius: 16px;
            cursor: pointer;

            .network_img {
              width: auto;
              height: 1.5rem;
            }
          }
        }

        .left_ui_block_hide {
          display: flex !important;

          li {
            padding-left: 0.1rem;
            padding-right: 0.1rem;

            .nav-link {
              position: relative;
              color: ${(props) => props.theme.BodyMainColor};
              font-weight: 500;
              font-size: 1rem;
              text-align: center;
              padding: 0.4rem 1rem 0.4rem 1rem;
              transition: hover 0.4s;
              padding-bottom: 10px;

              &:before {
                content: "";
                position: absolute;
                left: 0px;
                bottom: 0;
                width: 100%;
                height: 2px;
                opacity: 0;
                background: ${(props) => props.theme.BodySecondaryLine};
                transition: 450ms all;
              }

              &:hover {
                color: ${(props) => props.theme.BodyMainColor};

                &:before {
                  opacity: 1;
                }
              }
            }

            .active {
              position: relative;
              color: ${(props) => props.theme.BodyMainColor} !important;
              font-weight: 500;
              font-size: 1rem;
              text-align: center;
              padding: 0.4rem 1rem 0.4rem 1rem;
              transition: hover 0.4s;
              padding-bottom: 10px;
              text-decoration: none;

              &:before {
                content: "";
                position: absolute;
                left: 0px;
                bottom: 0;
                width: 100%;
                height: 2px;
                opacity: 1;
                background: ${(props) => props.theme.BodySecondaryLine};
                transition: 450ms all;
              }
            }

            .img_section {
              background: linear-gradient(90deg, #8b4898 0%, #009dd9 102.51%);
              padding: 0.5rem 2rem;
              border-radius: 16px;
              cursor: pointer;

              .network_img {
                width: auto;
                height: 1.5rem;
              }
            }

            .Wallet_section {
              position: relative;
              margin-left: 1rem;

              button {
                background: ${(props) => props.theme.BodySecondaryBg};
                border: none;
                color: ${(props) => props.theme.BodyMainColor};
                font-style: normal;
                font-weight: 600;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
                height: 48px;
                padding: 0.5rem 2rem;
                border-radius: 50px;
                width: 180px;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1216px) {
    .navbar_component {
      nav {
        padding: 0.2rem 0.5rem;

        .navbar-brand {
          img {
            height: 4.3rem;
            width: auto;
          }
        }

        .navbar-icon {
          display: block;
        }

        .left_ui_block {
          .Network_section {
            display: flex;
          }

          .left_ui_block_hide {
            display: none !important;
          }
        }

        button {
          display: none;
        }
      }
    }
  }
`;

export default HeaderWrapper;
