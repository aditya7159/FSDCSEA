/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Student.css"

function Student({data}) {
  
  return (
    <div className='icard'>
        {/* {
            JSON.stringify(data) }*/
            }
        { <table>
            <tbody>
                <tr><td colSpan={2}>{data.college}</td></tr>
                <tr><td colSpan={2}><img src={data.pic} heigth={100} width={100}/></td></tr>

                <tr><td>Roll No: </td><td>{data.roll}</td></tr>
                <tr><td>Name: </td><td>{data.name}</td></tr>
                <tr><td>Branch: </td><td>{data.branch}</td></tr>
                <tr><td>Section: </td><td>{data.section}</td></tr>
            </tbody>
        </table> }
    </div>
  )
}

export default Student