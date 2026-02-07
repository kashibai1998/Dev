import {Virtuoso} from 'react-virtuoso'
export default function Virtualization() {
  return (
    <div>
      <h2>Virtualzation List</h2>
      <Virtuoso 
      style={{height:"200px"}}
      itemContent={(index)=><div>Row - ${index}</div>} totalCount={100000} />
    </div>
  );
}

// import React from "react";
// // import { FixedSizeList as List } from "react-window";

// // const { FixedSizeList } = Window;

// const Row = ({ index }) => {
//   return <div>Row #{index}</div>;
// };

// export default function Virtualization() {
//   return (
//     <div>
//       <h2>Virtualzation List</h2>
//       <FixedSizeList height={500} width={100} itemSize={25} itemCount={1000}>
//         {Row}
//       </FixedSizeList>
//     </div>
//   );
// }
