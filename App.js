import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router'
import Checkout from './Componet/Checkout'
import { auth } from './Componet/firebase'
import Header from './Componet/Header'
import Home from './Componet/Home'
import Login from './Componet/Login'
import Payment from './Componet/Payment'
import { useStateValue } from './StateProvider'

const App = () => {

  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
            <div className="app">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route> 
          <Route exact path="/">
            <Header />
             <Home />
          </Route>
           <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
         { <Route exact path="/payment">
            <Header />
            {/* <Elements stripe={promise}> */}
              <Payment />
            {/* </Elements> */}
          </Route> }
        </Switch>
      </div>
    </>
  )
}

export default App
