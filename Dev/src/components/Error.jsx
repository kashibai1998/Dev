import React from "react";
import { ErrorBoundary } from "react-error-boundary";
class ErrorClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError");
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("componentDidCatch");
    // console.log("errorInfo in comp", error,errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <>something went wrong</>;
    }

    return this.props.children;
    // return <>Error class {JSON.stringify(this.state.hasError)}</>;
  }
}

const Error1 = () => {
  const a = "kashi";
  return (
    <div>
      <p>I ma error Component</p>
      {a.name}
    </div>
  );
};

const ErrorCls = () => {
  return (
    <>
      <p>error Cls</p>
      <ErrorClass>
        <Error1 />
      </ErrorClass>
    </>
  );
};

export default ErrorCls;

const ErrorFallback = ({ error }) => {
  return (
    <>
      <p>something went wrong</p>
      {error.message}
    </>
  );
};

export const ErrorBoundaryFun = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Error1 />
      </ErrorBoundary>
    </>
  );
};
