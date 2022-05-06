import React, { useState } from "react";
import {
  Hav,
  Container,
  NavBar,
  Center,
  Slogan,
  Forms,
  DivButtoNAV,
  ButtonCenter,
  ButtonNAV,
  Arroy,
  MenuMobile,
} from "./styles";
import { Formik } from "formik";
import { AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  const [first, setfirst] = useState(false);
  return (
    <div>
      <Hav>
        <Container>
          <NavBar>
            <h1>Physionic</h1>
            <MenuMobile onClick={() => setfirst(!first)}>
              <AiOutlineMenu />
            </MenuMobile>
            <ButtonNAV open={first}>
              <div>
                <div>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">Product</a>
                  </li>
                  <li>
                    <a href="/">Pricing</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                </div>
              </div>
              <DivButtoNAV>
                <button>
                  Get Quote Now
                  <Arroy />
                </button>
              </DivButtoNAV>
            </ButtonNAV>
          </NavBar>
          <Center>
            <Slogan>
              <div>
                <h1>Meet the Best Hospital</h1>
                <h4>
                  We know how large objects will act, but things on a small
                  scale.
                </h4>
              </div>
              <ButtonCenter>
                <button>Learn More</button>
                <button>Get Quote Now</button>
              </ButtonCenter>
            </Slogan>
            <Forms>
              <h3>Book Appointment</h3>
              <Formik
                initialValues={{
                  nombre: "",
                  email: "",
                  time: "s",
                  departament: "",
                
                }}
                onSubmit={(valores) => {
                  console.log(valores);
                  console.log("formulario enviado");
                }}
              >
                {({ handleSubmit, values, handleChange, handleBlur }) => (
                  <form action="" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="nombre">Name *</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Full Name"
                        value={values.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div>
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@gmail.com "
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div>
                      <label htmlFor="departament">Departament *</label>
                      <input
                        type="list"
                        id="departament"
                        name="departament"
                        placeholder="Name"
                        value={values.departament}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        list="departaments"
                      />
                      <datalist id="departaments">
                        <option value="Emergency Case" />
                        <option value="Cancer Care" />
                        <option value="Health Queries" />
                      </datalist>
                    </div>
                    
                    <div>
                      <label htmlFor="time">Time *</label>
                      <input
                        type="list"
                        id="time"
                        name="time"
                        placeholder="4:00 Aviable"
                        value={values.time}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        list="browsers"
                      />
                      <datalist id="browsers">
                        <option value="8:00" />
                        <option value="9:00" />
                        <option value="10:00" />
                        <option value="11:00" />
                        <option value="12:00" />
                        <option value="13:00" />
                        <option value="14:00" />
                        <option value="15:00" />
                        <option value="16:00" />
                        <option value="17:00" />
                        <option value="18:00" />
                        <option value="19:00" />
                      </datalist>
                    </div>
                    
                    <button type="submit">Book Appointment</button>
                  </form>
                )}
              </Formik>
            </Forms>
          </Center>
        </Container>
      </Hav>
    </div>
  );
};
