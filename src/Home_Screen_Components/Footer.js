import React from 'react'

function Footer() {
  return (
    <div>
         <div
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '10px'}}
      >
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />

        <div>
          <p style={{ textAlign: 'center'}} class = "font-semibold">Copyright © 2022 Less Boring-ify Trees</p>
        </div>

        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
      </div>
    </div>
  )
}

export default Footer