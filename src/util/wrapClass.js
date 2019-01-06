import React from "react";

// const wrapClass = (WrappedComponent, className) => {
//   return props => (
//     <div className={className}>
//       <WrappedComponent {...props}/>
//     </div>
//   );
// };

const wrapClass = (WrappedComponent, className) => {
  return class extends React.Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default wrapClass;
