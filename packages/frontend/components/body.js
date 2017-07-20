// @flow

type BodyProps = {
  // children: any // literally what's in the flow libdef, we expect a React Element
  children: React$Element<*>
};

const Body = (props: BodyProps) => {
  return (
    <div>
      <div className="main-container">
        {props.children}
      </div>
      <style jsx>{`
        .main-container {
          margin-left: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Body;
