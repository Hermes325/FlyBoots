import * as React from "react"
import Header from "../components/Header/Header"

import "../css/about_us.css"
import "../css/catalog.css"
import "../css/citata.css"
import "../css/fonts.css"
import "../css/HIW.css"
import "../css/main.css"
import "../css/media.css"
import "../css/nav.css"
import "../css/planshet.css"
import "../css/question.css"
import "../css/ramka_tovara.css"

const IndexPage = () =>
  <>
    <Header />

    <main>
      <div className="flex_main">
        <div>
          <h1 style={{ paddingTop: "6vw" }} className="h1_transfer">
            Fly <br /> Boots
          </h1>
        </div>

        <div className="krugmain flex_center">
          <img src="../images/FBlogo.svg" alt="FBlogo" className="Logotip" />
        </div>


        <div className="praviy_text_flex">
          <p className="jost400 praviy_text">Congue arcu aliquam amet sapien, sollicitudin egestas.
            Sed volutpat tristique bibendum senectus consectetur sagittis, at.
          </p>
          <div id="Рамка_узнать_подробнее" className=" more_media flex_end_end">
            <div className="ramochka2">
              <div className="ramochka1 grid_ramochka">
                <div className="flex_colomn">
                  <div className="flex_space-evenly"
                    style={{ justifyContent: "space-around", gap: "45px", paddingTop: "15px" }}>
                    <p className="jost400_4" style={{ width: "15vw" }}>Узнайте о нас поподробнее</p>

                    <img src="../images/globus.svg" alt="globus" className="globus" />

                  </div>

                  <p className="jost400_2" style={{ paddingLeft: "2.5vw", marginTop: "1vw", width: "27vw" }}>
                    Congue arcu aliquam amet sapien, <br /> sollicitudin egestas.
                    Sed volutpat tristique bibendum senectus consectetur sagittis, at.
                  </p>
                </div>

                <div className="flex_soc">
                  <a href="https://www.avito.ru/" className="avito">
                    Авито
                    <img src="../images/avito.svg" alt="avito_icon" />
                  </a>

                  <a href="https://www.vk.ru/" className="vk">
                    <img src="../images/vk.svg" alt="vk_icon" />
                  </a>

                  <a href="https://www.tg.ru/">
                    <div className="tg">
                      <img src="../images/tg.svg" alt="tg_icon" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="../images/shnurki2.svg" alt="shnurki2" style={{ display: "none" }} />
      <img src="../images/Subtract.png" alt="shnurki1" className="shnurki1" />

      <div className="flex_end_end golubi" style={{ transform: "translate(-25vw, -10vw)" }}>
        <img src="../images/golub1.svg" alt="golub1" />
        <img src="../images/golub2.svg" alt="golub2" className="golub2" />
      </div>

      <div className="more_media">
        <div className="krug1"></div>
        <div className="krug2"></div>
        <div className="krug3"></div>
        <div className="krug4"></div>
      </div>

    </main>


    <section id="catalog" className="catalog_media" style={{ transform: "translateY(-7vw)" }}>
      <h1 className="Montserrat700 flex_center">
        Каталог
      </h1>
      <div className="catalog_text_media">
        <p className="Roboto400 flex_center" style={{ marginTop: "2vw" }}>
          Congue arcu aliquam amet sapien, sollicitudin egestas.
          Sed volutpat tristique bibendum senectus consectetur sagittis, at.
          Euismod <br /> praesent viverra rutrum eget tellus dignissim habitant mauris elit.
          Integer fringilla purus faucibus at viverra erat id.
        </p>
      </div>

      <div className="container">
        <a href="./catalog.html" className="ramochka_child">
          <div className="btn">
            Кроссовки
            <img src="../images/Vector.svg" alt="купить" />
          </div>
        </a>

        <a href="./catalog.html" className="ramochka_man">
          <div className="btn">
            Одежда
            <img src="../images/Vector.svg" alt="купить" />
          </div>
        </a>

        <a href="./catalog.html" className="ramochka_woman">
          <div className="btn">
            Аксессуары
            <img src="../images/Vector.svg" alt="купить" />
          </div>
        </a>
      </div>


      <p className="Roboto400 flex_center" style={{ marginTop: "2vw" }}>Congue arcu aliquam amet sapien, sollicitudin
        egestas.
        Sed volutpat tristique bibendum senectus consectetur sagittis, at.
        Euismod < br /> praesent viverra rutrum eget tellus dignissim habitant mauris elit.
        Integer fringilla purus faucibus at viverra erat id.</p>
    </section>

    <section id="цитата мыслителей" className="flex_end">
      <img src="../images/david.svg" alt="david" className="david" />
      <div className="citata_david">
        <img src="../images/rama_citata.svg" alt="ramka" style={{ width: "40vw" }} />
        <p className="slova_david Montserrat700_citata">Какой-то блок с мотивирующей фразой для покупателя</p>
      </div>

      <div className="citata_cesar">
        <img src="../images/ramka_citata.svg" alt="ramka" style={{ width: "30vw", height: "12vw" }} />
        <p className="slova_cesar Montserrat700_citata">Да-да, точно, с цитатой</p>
      </div>
      <img src="../images/cesar.svg" alt="cesar" className="cesar" />

    </section>

    <div className="flex_center" id="Заказать">
      <a href="пропишу" className="zakazat jost500_1 flex_center" style={{ alignItems: "center" }}>Заказать</a>
    </div>

    <section id="Как_это_работает?" style={{ paddingLeft: "6.042vw" }}>
      <h2> Как это работает ?</h2>
      <div className="grid_hiw">
        <div id="левая сторона">

          <p className="jost400_5">* очень просто</p>
          <p className="Roboto400_1" style={{ width: "37vw", marginTop: "2vw" }}>Congue arcu aliquam amet sapien,
            sollicitudin egestas.
            Sed volutpat tristique bibendum senectus consectetur sagittis, at.
            Euismod praesent viverra rutrum eget tellus dignissim habitant mauris elit.
            Integer fringilla purus faucibus at viverra erat id.
          </p>
          <p className="jost400_5" style={{ width: "37vw", marginTop: "2vw" }}>Congue arcu aliquam amet sapien,
            sollicitudin egestas.
            Sed volutpat tristique bibendum senectus consectetur sagittis, at.
          </p>


          <div className="flex_colomn ramka_hiw">
            <div className="image_1_4">

            </div>
            <div className="grid_hiw_3">
              <h4 style={{ textIndent: "15px" }}>
                Cбор заказа
              </h4>
              <div className="flex_items_center">
                <div style={{ border: "2px solid #FFE602", height: "2.5vw" }}>

                </div>
              </div>

              <p className="jost400_7" style={{ width: "19vw" }}>
                Congue arcu aliquam amet sapien, sollicitudin egestas.
                Sed volutpat tristique bibendum senectus
              </p>
            </div>

          </div>

          <div>
            <div className="grid_hiw_4" style={{ marginTop: "2vw" }}>
              <p className="jost500_2">1</p>
              <p className="jost500_2">2</p>
              <p className="jost500_2">3</p>
              <p className="jost500_2">4</p>
            </div>
            <div className="palochka">

            </div>
          </div>

          <p style={{ width: "30.729vw", marginTop: "3vw" }} className="Roboto400_2">
            Congue arcu aliquam amet sapien, sollicitudin egestas.
            Sed volutpat tristique bibendum senectus consectetur sagittis, at.
            Euismod praesent viverra rutrum eget tellus dignissim habitant mauris elit.
            Integer fringilla purus faucibus at viverra erat id.
          </p>




          <div id="A_what_with_delivery_?">
            <h2 className="Montserrat700_2" style={{ marginTop: "10vw" }}>
              А что с <br /> доставкой?
            </h2>

            <p className="jost400_2" style={{ width: "30vw", color: "rgba(255, 199, 0, 0.95)" }}>
              Euismod praesent viverra rutrum eget tellus dignissim habitant mauris elit.
              Integer fringilla purus faucibus at viverra erat id.
            </p>

            <div className="grid_hiw_5">
              <div className="flex" style={{ marginTop: "2vw" }}>
                <div><img src="../images/bi_truck.svg" alt="truck" /></div>
                <div style={{ paddingLeft: "2vw" }}>
                  <h4>Доставляем по России</h4>
                  <br />
                  <p className="jost400_7" style={{ width: "28vw" }}>Congue arcu aliquam amet sapien,
                    sollicitudin
                    egestas.
                    Sed volutpat tristique bibendum senectus consectetur sagittis, at.
                    Euismod praesent viverra rutrum eget tellus dignissim habitant mauris elit.
                  </p>
                </div>
              </div>
              <div className="flex" style={{ marginTop: "2vw" }}>
                <div><img src="../images/iconoir_box-iso.svg" alt="iconoir_box" /></div>
                <div style={{ paddingLeft: "2vw" }}>
                  <h4> В прекрасной упаковке</h4>
                  <br />
                  <p className="jost400_7" style={{ width: "28vw" }}>Congue arcu aliquam amet sapien,
                    sollicitudin
                    egestas.
                    Sed volutpat tristique bibendum senectus consectetur sagittis, at.
                    Euismod praesent viverra rutrum eget tellus dignissim habitant mauris elit.
                  </p>
                </div>
              </div>
              <div className="flex" style={{ marginTop: "2vw" }}>
                <div><img src="../images/ion_pricetags-outline.svg" alt="truck" /></div>
                <div style={{ paddingLeft: "2vw" }}>
                  <h4>С прекрасной ценой</h4>
                  <br />
                  <p className="jost400_7" style={{ width: "28vw" }}>Congue arcu aliquam amet sapien,
                    sollicitudin
                    egestas.
                    Sed volutpat tristique bibendum senectus consectetur sagittis, at.
                    Euismod praesent viverra rutrum eget tellus dignissim habitant mauris elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>





        <div className="grid_hiw_2" id="правая сторона">

          <div className="flex_left">
            <img src="../images/recept.svg" alt="recept" />
            <div style={{ paddingLeft: "1.5vw" }}>
              <h3>Ваш заказ</h3>
              <p className="jost400_6" style={{ width: "23vw", paddingTop: "0.5vw" }}>
                Congue arcu aliquam amet sapien, sollicitudin egestas.
                Sed volutpat tristique bibendum senectus
              </p>
            </div>
          </div>

          <div className="flex_right">
            <img src="../images/shopping_bag_FILL0_wght400_GRAD0_opsz48 1.svg" alt="shopping_bag" />
            <div style={{ paddingLeft: "1.5vw" }}>
              <h3>Сбор заказа</h3>
              <p className="jost400_6" style={{ width: "23vw", paddingTop: "0.5vw" }}>
                Congue arcu aliquam amet sapien, sollicitudin egestas.
                Sed volutpat tristique bibendum senectus
              </p>
            </div>
          </div>
          <div className="flex_left_1">
            <img src="../images/carbon_delivery-parcel.svg" alt="carbon_delivery-parcel" />
            <div style={{ paddingLeft: "1.5vw" }}>
              <h3>Доставка до вас</h3>
              <p className="jost400_6" style={{
                width: "23vw", paddingTop: "0.5vw"
              }}>
                Congue arcu aliquam amet sapien, sollicitudin egestas.
                Sed volutpat tristique bibendum senectus
              </p>
            </div>
          </div>
          <div className="flex_right">
            <img src="../images/ic_round-done.png" alt="ic_round-done" />
            <div style={{ paddingLeft: "1.5vw" }}>
              <h3>Завершение работы</h3>
              <p className="jost400_6" style={{
                width: "23vw", paddingTop: "0.5vw"
              }}>
                Congue arcu aliquam amet sapien, sollicitudin egestas.
                Sed volutpat tristique bibendum senectus
              </p>
            </div>
          </div>


          <img src="../images/punktir.svg" alt="road" className="punktir" />
          <div className="flex_center" style={{ zIndex: "1" }}>
            < img src="../images/dostavka.svg" alt="dostavka/"
              style={{ height: "60.093vw", width: "25.521vw", transform: "translate(2vw, -10vw)" }} />
          </div>

        </div>
      </div>


      <div className="flex" id="Связаться">
        <a href="пропишу" className="svazatsa jost400_8 flex_items_center flex_center"
          style={{ marginTop: "5vw" }}>Связаться с нами</a>
      </div>

    </section>


    <section id="About_us">

      <div className="flex_end_1">
        <img src="../images/NEW BALANCE MS 327 LY1 - AFEW STORE.png" alt="box/"
          style={{ width: "25vw", transform: "translate(4vw)", marginTop: "2vw" }} />

        <div className="flex_colomn">
          <p className="Roboto400 text1" style={{ marginTop: "2vw" }}>
            Congue arcu aliquam amet sapien, sollicitudin egestas.
            Sed volutpat tristique bibendum senectus consectetur sagittis, at.
            Euismod praesent viverra rutrum eget tellus dignissim habitant mauris elit.
            Integer fringilla purus faucibus at viverra erat id.
          </p>

          <p className="Roboto400 text1">
            Congue arcu aliquam amet sapien, sollicitudin egestas.
            Sed volutpat tristique bibendum senectus consectetur sagittis, at.
          </p>

        </div>
        <img src="../images/righthand.svg" alt="righthand" style={{ width: "30vw" }} />
      </div>

      <div className="flex_end_end">
        <p className="Montserrat700_citata flex_end_end"
          style={{ width: "18vw", fontSize: "2.5vw", marginRight: "8vw", transform: "translate(0vw, -2vw)" }}>
          Congue arcu aliquam amet
        </p>
      </div>

      <div className="flex_end_1">
        <img src="../images/lefthand.svg" alt="lefthand" style={{
          width: "24vw "
        }} />

        <div className="flex_colomn">
          <p className="Roboto400 text">
            Congue arcu aliquam amet sapien, sollicitudin egestas.
            Sed volutpat tristique bibendum senectus consectetur sagittis, at.
            Euismod praesent viverra rutrum eget tellus dignissim habitant mauris elit.
            Integer fringilla purus faucibus at viverra erat id.
          </p>

          <p className="Roboto400 text" style={{ width: "25vw" }}>
            Congue arcu aliquam amet sapien, sollicitudin egestas.
            Sed volutpat tristique bibendum senectus consectetur sagittis, at.
          </p>
        </div>
        <div>
          <img src="../images/whitenike.png" alt="box" style={{ width: "25vw", transform: "translate(-2vw)" }} />
        </div>
      </div>
    </section>

    <section id="Связаться" className="flex_end_1" style={{ marginLeft: "7vw" }}>
      < div>
        <h2>
          Остались вопросы?
        </h2>
        <p className="bledno">
          С радостью ответим на все из них
        </p>
        <div className="flex">
          <div className="flex_colomn">
            <a href="https://www.vk.ru/" className="we_in_VK flex_main">
              <div>
                <h5 className="text_vk_tg">Мы в VK</h5>
                <p className="text_vk" style={{ padding: "2vw 3vw 0vw 2vw" }}>Congue arcu aliquam amet sapien,
                  sollicitudin egestas</p>
              </div>
              <img src="../images/vk.svg" alt="vk_icon" style={{ transform: "translate(-1vw, 1vw)" }} />
            </a>
            <a href="https://www.tg.ru/" className="we_in_TG flex_main">
              <div>
                <h5 className="text_vk_tg">Мы в Telegram</h5>
                <p className="text_tg" style={{ padding: "2vw 3vw 0vw 2vw" }}>Congue arcu aliquam amet sapien,
                  sollicitudin egestas</p>
              </div>

              <img src="../images/tg.svg" alt="tg_icon" style={{ transform: "translate(-1vw, 1vw)" }} />
            </a>
          </div>

          <a href="https://www.avito.ru/" className="we_in_avito flex_avito">
            <div className="flex">
              <img src="../images/WTF.svg" alt="WTF" className="WTF" />
              <p className="text_avito">Да, оно еще существует</p>
            </div>
            <h5 className="text_avito_main">
              Мы на <br />
              Avito
            </h5>
            <img src="../images/avito.svg" alt="avito_icon" style={{ transform: "translate(7.3vw, 1vw)" }} />
          </a>
        </div>

        <p className="konec">
          Congue arcu aliquam amet sapien, sollicitudin egestas.
          Sed volutpat tristique bibendum senectus consectetur sagittis, at.
        </p>

        <p className="prava">© 2022 Flyboots. Все права защищены.</p>

      </div>
      <div>
        <img src="../images/end.svg" alt="end" style={{ width: "47vw" }} />
      </div>
    </section>

  </>

export default IndexPage

export const Head = () => <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <title>Главная страница</title>
</>
