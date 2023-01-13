import React from 'react'


const Footer = () =>
  <footer id="Связаться" className="flex_end_1" style={{ marginLeft: "7vw" }}>
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

            </div>
            <img src="../../images/vk.svg" alt="vk_icon" style={{ transform: "translate(-1vw, 1vw)" }} />
          </a>
          <a href="https://www.tg.ru/" className="we_in_TG flex_main">
            <div>
              <h5 className="text_vk_tg">Мы в Telegram</h5>

            </div>

            <img src="../../images/tg.svg" alt="tg_icon" style={{ transform: "translate(-1vw, 1vw)" }} />
          </a>
        </div>

        <a href="https://www.avito.ru/" className="we_in_avito flex_avito">
          <div className="flex">
            <img src="../../images/WTF.svg" alt="WTF" className="WTF" />
            <p className="text_avito">Да, оно еще существует</p>
          </div>
          <h5 className="text_avito_main">
            Мы на <br />
            Avito
          </h5>
          <img src="../../images/avito.svg" alt="avito_icon" style={{ transform: "translate(7.3vw, 1vw)" }} />

        </a>
      </div>
      <p className="prava">© 2022 Flyboots. Все права защищены.</p>

    </div>
    <div style={{marginTop: "6vw"}}>
      <img src="../../images/end.svg" alt="end" style={{ width: "34vw"}} />
    </div>

  </footer>

export default Footer