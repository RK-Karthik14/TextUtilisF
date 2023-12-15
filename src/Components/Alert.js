import React from 'react'

export default function Alert(props) {

    const firstCapital =(word)=>{
        const firstalphabet = word.toLowerCase();
        return firstalphabet.charAt(0).toUpperCase() + firstalphabet.slice(1);
    }

  return (
    props.Alert &&
    <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
        <strong>{firstCapital(props.Alert.type)} :</strong>{props.Alert.msg}
    </div>
  )
}
