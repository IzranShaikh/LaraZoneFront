import React from 'react'

// export class Reg extends Component {

//   state = {
//     name: '',
//     email: '',
//     password: '',
//     image: null,
//   };

//   reg = async () => {
//     try {
//       const { name, email, password, image } = this.state;

//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('email', email);
//       formData.append('password', password);
//       formData.append('image', image);

//       const response = await fetch('http://localhost:8000/api/reg', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//         body: formData,
//       });

//       if (response.ok) {
//           console.log("sent")
//       }


//     } catch (error) {
//       console.log(error);
//     }
//   };

//   login = async () => {
//     const data = {
//       email: "izran@gmail.com",
//       password : "tester123"
//     }
//     const response = fetch('http://localhost:8000/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data)
//     });
//     if (response.ok) {
//       console.log(response.body);
//     }
//   };

//   handleFieldChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   }

//   handleImageChange = (event) => {
//     const imageFile = event.target.files[0];
//     this.setState({ image: imageFile });
//   }

//   render() {

//     const { name, email, password } = this.state;

//     return (
//       <div>
//         <br /><center><h2>SIGN UP</h2></center>
//         <div className='container'>
//           <div className="form-group">
//             <label htmlFor="exampleInputName1">Name</label>
//             <input name="name" value={name} onChange={this.handleFieldChange} type="text" className="form-control" id="exampleInputName1" placeholder="Name" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputEmail1">Email address</label>
//             <input name="email" value={email} onChange={this.handleFieldChange} type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputPassword1">Password</label>
//             <input name='password' value={password} onChange={this.handleFieldChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
//           </div>
//           <input type="file" name='image' onChange={this.handleImageChange} className="form-control" />
//           <button onClick={this.reg} className="btn btn-primary">Register</button>
//           <hr />
//           {/* <center><h2>LOGIN</h2></center>
//           <div className="form-group">
//             <label htmlFor="exampleInputEmail1">Email address</label>
//             <input name="email" value={email} onChange={this.handleFieldChange} type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputPassword1">Password</label>
//             <input name='password' value={password} onChange={this.handleFieldChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
//           </div> */}
//           <button onClick={this.login} className="btn btn-primary">TEST</button>
//         </div>
//       </div>
//     );
//   };
// };

const Reg = () => {

  const login = async () => {
    const data = {
      email: "izran@gmail.com",
      password: "tester123"
    }
    // console.log(data)
    const response = await fetch('https://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Accept': "application/vnd.api+json",
        'Content-Type': 'application/vnd.api+json',
      },
      body: JSON.stringify(data)
    });

    const result = response.json();
    console.log(result)
    return result
    // if (response.ok) {
    //   console.log(response.body);
    // }
  };


  return (
    <div>
      <button onClick={login} className="btn btn-primary">TEST</button>
    </div>
  )
}

export default Reg
