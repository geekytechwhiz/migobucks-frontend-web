import React, { useState, useEffect, useCallback } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { message, Alert } from "antd";
import ProtectedRoute from "./components/route/Protected";
import AppRouting, { IAppRouting } from "./App.routing";
import Loading from "./components/loading";

const App: React.FC = () => {
  const [networkConnected, setNetworkConnected] = useState<boolean>(true);

  const handleOfflineEvent = useCallback(() => {
    console.log("network disconnected...");
    setNetworkConnected(false);
  }, []);

  const handleOnlineEvent = useCallback(() => {
    message.success("Connected to the internet.");
    setNetworkConnected(true);
  }, []);

  useEffect(() => {
    window.addEventListener("offline", handleOfflineEvent);
    window.addEventListener("online", handleOnlineEvent);

    return () => {
      window.removeEventListener("offline", handleOfflineEvent);
      window.removeEventListener("online", handleOnlineEvent);
    };
  }, [handleOfflineEvent, handleOnlineEvent]);

  return (
    <Switch>
      <Loading>
        {!networkConnected && (
          <Alert
            style={{ fontSize: "18px" }}
            closable
            type="error"
            banner
            message="You are offline. Please connect to the internet"
          />
        )}
        <Route exact path="/">
          <Redirect to="/auth" />
        </Route>
        {AppRouting.map((props: IAppRouting) =>
          props.protected ? (
            <ProtectedRoute {...props} fallbackRedirect="/" />
          ) : (
            <Route {...props} />
          )
        )}
      </Loading>
    </Switch>
  );
};

export default App;
