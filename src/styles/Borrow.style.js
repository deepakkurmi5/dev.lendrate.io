import styled from "styled-components";

const BorrowWrapper = styled.div`
  .borrow {
    .borrow_title {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .borrow_subtitle {
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        color: ${(props) => props.theme.HeaderSecondary};
        font-size: 1.1rem;
      }
    }

    .notifyModel {
      button {
        color: ${(props) => props.theme.BodyMainColor};
        border: none;
        background: ${(props) => props.theme.BodySecondaryBg};
        padding: 0.6rem 3.5rem;
        border-radius: 10px;
        display: flex;
        align-items: center;

        img {
          height: 1.5rem;
          width: auto;
        }
      }
    }

    .borrow_overview {
      .overview_title {
        p {
          color: ${(props) => props.theme.BodyMainColor};
          font-size: 1.6rem;
          font-weight: 900;
          font-style: normal;
          font-weight: 400;
        }
      }

      .overview_img {
        position: relative;

        hr {
          border: 1px solid white;
          width: 100%;
        }

        img {
          position: absolute;
          transform: rotate(-90deg);
          right: -10px;
          top: -4px;
          width: auto;
          height: 0.6rem;
        }
      }

      .overview_card {
        .bottom_borrow_img {
          position: relative;
          margin-top: 30px;

          hr {
            border: 1px solid ${(props) => props.theme.BodyMainColor};
            width: 0px;
            height: 100%;
            margin-top: 0rem !important;
            margin-bottom: 0rem !important;
          }

          img {
            position: absolute;
            transform: translate(-50%, 50%);
            bottom: 0px;
            width: auto;
            height: 0.6rem;
          }
        }

        .borrow_card {
          .borrow_card_left {
            .borrow_cart {
              @property --p {
                syntax: "<number>";
                inherits: true;
                initial-value: 0;
              }

              .pie {
                --c: #fd37ae;
                --b: 16px;
                --w: 150px;
                --p: ${(props) => props.pie};

                width: 120px;
                aspect-ratio: 1;
                position: relative;
                display: inline-block;
                margin: 5px;
                place-content: center;
                transform: rotate(90deg);
                cursor: pointer;
              }

              .pie:before,
              .pie:after {
                content: "";
                position: absolute;
                border-radius: 50%;
              }

              .pie:before {
                inset: 0;
                background: radial-gradient(farthest-side, var(--c) 98%, #0000)
                    top/var(--b) var(--b) no-repeat,
                  conic-gradient(var(--c) calc(var(--p) * 1%), #0000 0);
                -webkit-mask: radial-gradient(
                  farthest-side,
                  #0000 calc(99% - var(--b)),
                  #000 calc(100% - var(--b))
                );
                mask: radial-gradient(
                  farthest-side,
                  #0000 calc(99% - var(--b)),
                  #000 calc(100% - var(--b))
                );
              }

              .pie:after {
                inset: calc(50% - var(--b) / 2);
                background: var(--c);
                transform: rotate(calc(var(--p) * 3.6deg))
                  translateY(calc(50% - var(--w) / 2));
              }

              .animate {
                animation: ani 1s 0.5s both;
              }

              .no-round:before {
                background-size: 0 0, auto;
              }

              .no-round:after {
                content: none;
              }

              .totalSupplyPie {
                position: absolute;
                display: inline-block;
                top: 22px;
                left: 37px;
                cursor: pointer;

                img {
                  height: 85px;
                  width: auto;
                  border-radius: 50%;
                  z-index: -1;
                }
              }

              @keyframes ani {
                from {
                  --p: 0;
                }
              }
            }

            .miter1,
            .miter2 {
              z-index: -1;
              position: absolute;

              p {
                color: ${(props) => props.theme.BodyMainColor};
              }
            }

            .miter1 {
              top: -17px;
              left: 98px;

              p {
                line-height: 20px;
              }

              img {
                width: 132px;
              }
            }

            .miter2 {
              left: 125px;
              top: 80px;

              p {
                line-height: 0px;
              }

              img {
                width: 110px;
              }
            }

            .cart_details {
              z-index: -1;
              p,
              span {
                color: ${(props) => props.theme.BodyMainColor};
              }
            }
          }

          .borrow_card_right {
            border-left: 3px solid ${(props) => props.theme.BodyMainColor};

            .list_section {
              table {
                tr {
                  td {
                    color: ${(props) => props.theme.BodyMainColor};
                  }

                  .list_section_right {
                    padding-left: 20px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .borrow {
      .borrow_overview {
        .overview_card {
          .borrow_card {
            padding: 1.5rem 1rem;

            &::before {
              padding: 1.5rem 1rem;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 999px) {
    .borrow {
      .borrow_overview {
        .overview_card {
          .borrow_card {
            padding: 1.5rem 2rem;

            &::before {
              padding: 1.5rem 2rem;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .borrow {
      .borrow_overview {
        .overview_title {
          p {
            text-align: center;
          }
        }

        .overview_img {
          display: none;
        }

        .overview_card {
          .bottom_borrow_img {
            display: none;
          }
        }
      }
    }
  }
`;

export default BorrowWrapper;
