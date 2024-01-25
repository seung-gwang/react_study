// import React, {
//   createContext,
//   useContext,
//   useEffect,
//   useRef,
//   useState,
// } from "react";
// import { Form, InputGroup, Table } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// export const LifeCycleContext = createContext();

// export function LifeCycleProvider(props) {
//   const [member, setMember] = useState({});
//   const [memberName, setMemberName] = useState("");
//   const nameInput = useRef();
//   const phoneInput = useRef();
//   var memberNo = useRef(1);
//   const [memberList, setMemberList] = useState([
//     // {
//     //   id: 1,
//     //   name: "정진",
//     //   phone: "010-5352-3053",
//     // },
//   ]);

//   const memberAdd = (e) => {
//     if (
//       member.name === "" ||
//       member.name == null ||
//       member.phone === "" ||
//       member.phone == null
//     ) {
//       return;
//     }

//     if (
//       memberList.find((item) => {
//         return item.name === member.name || item.phone === member.phone;
//       })
//     ) {
//       return;
//     }

//     const newMember = { ...member, id: memberNo.current };
//     setMemberList([...memberList, newMember]);
//     memberNo.current++;
//   };

//   const changeHandler = (e) => {
//     setMember({
//       ...member,
//       [e.target.name]: e.target.value,
//     });
//   };

//   useEffect(() => {
//     console.log("component가 rendering 될 때마다 수행.");
//   });

//   useEffect(() => {
//     console.log("component가 최초 rendering 될 때 1회 수행.");
//   }, []); //[]의존 배열

//   useEffect(() => {
//     console.log(
//       "component가 최초 rendering 될 때 그리고 memberName 변경될때마다 수행 - Member가 바뀌었다."
//     );
//   }, [member]);

//   console.log("클리너 수행");

//   return (
//     <LifeCycleContext.Provider
//       value={{
//         changeHandler,
//         memberAdd,
//         memberList,
//         member,
//         TrComponent,
//       }}
//     >
//       {props.children}
//     </LifeCycleContext.Provider>
//   );

//   // return (
//   //   <div>
//   //     <InputGroup className="mb-3">
//   //       <InputGroup.Text id="basic-addon1">ID</InputGroup.Text>
//   //       <Form.Control
//   //         placeholder="id"
//   //         aria-label="id"
//   //         aria-describedby="basic-addon1"
//   //         name="id"
//   //         //value={member.id || ""}
//   //         value={memberNo.current}
//   //         onChange={changeHandler}
//   //         readOnly="readonly"
//   //       />
//   //       <Form.Control
//   //         placeholder="name"
//   //         aria-label="name"
//   //         aria-describedby="basic-addon1"
//   //         name="name"
//   //         value={member.name || ""}
//   //         onChange={changeHandler}
//   //         ref={nameInput}
//   //       />
//   //       <Form.Control
//   //         placeholder="phone"
//   //         aria-label="phone"
//   //         aria-describedby="basic-addon1"
//   //         name="phone"
//   //         value={member.phone || ""}
//   //         onChange={changeHandler}
//   //         ref={phoneInput}
//   //       />
//   //       <div>
//   //         <button variant="warning" onClick={memberAdd}>
//   //           추가
//   //         </button>
//   //         <button variant="info" onClick={() => nameInput.current.focus()}>
//   //           이름 이동
//   //         </button>
//   //         <button variant="info" onClick={() => phoneInput.current.focus()}>
//   //           번호 이동
//   //         </button>
//   //       </div>
//   //     </InputGroup>

//   //     <Table striped bordered hover>
//   //       <thead>
//   //         <tr>
//   //           <th>ID</th>
//   //           <th>name</th>
//   //           <th>phone</th>
//   //         </tr>
//   //       </thead>
//   //       <tbody>
//   //         {memberList.map((member, idx) => (
//   //           <TrComponent member={member} key={idx}></TrComponent>
//   //         ))}
//   //       </tbody>
//   //     </Table>
//   //   </div>
//   // );
// }

// function TrComponent(props) {
//   //const { member } = props;
//   const { member } = useContext(LifeCycleContext);
//   return (
//     <tr>
//       <td>{member.id}</td>
//       <td>{member.name}</td>
//       <td>{member.phone}</td>
//     </tr>
//   );
// }

// export default function ProviderTest(props) {
//   const { member } = useContext(
//     LifeCycleContext,
//     memberNo,
//     changeHandler,
//     nameInput,
//     memberList,
//     nameInput
//   );
//   return (
//     <div>
//       <LifeCycleProvider>
//         <div>
//           <InputGroup className="mb-3">
//             <InputGroup.Text id="basic-addon1">ID</InputGroup.Text>
//             <Form.Control
//               placeholder="id"
//               aria-label="id"
//               aria-describedby="basic-addon1"
//               name="id"
//               //value={member.id || ""}
//               value={memberNo.current}
//               onChange={changeHandler}
//               readOnly="readonly"
//             />
//             <Form.Control
//               placeholder="name"
//               aria-label="name"
//               aria-describedby="basic-addon1"
//               name="name"
//               value={member.name || ""}
//               onChange={changeHandler}
//               ref={nameInput}
//             />
//             <Form.Control
//               placeholder="phone"
//               aria-label="phone"
//               aria-describedby="basic-addon1"
//               name="phone"
//               value={member.phone || ""}
//               onChange={changeHandler}
//               ref={phoneInput}
//             />
//             <div>
//               <button variant="warning" onClick={memberAdd}>
//                 추가
//               </button>
//               <button variant="info" onClick={() => nameInput.current.focus()}>
//                 이름 이동
//               </button>
//               <button variant="info" onClick={() => phoneInput.current.focus()}>
//                 번호 이동
//               </button>
//             </div>
//           </InputGroup>

//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>name</th>
//                 <th>phone</th>
//               </tr>
//             </thead>
//             <tbody>
//               {memberList.map((member, idx) => (
//                 <TrComponent member={member} key={idx}></TrComponent>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       </LifeCycleProvider>
//     </div>
//   );
// }
