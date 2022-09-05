export default function Card2(props) {
    return (
        <>
      <div
        style={{
          border: "3px dotted",
          width: "180px",
          backgroundColor: "grey",
          padding: "5px",
          marginTop: "10px"
        }}
      >
        MY NAME IS {props.Name}
      </div>
      </>
    );
  }