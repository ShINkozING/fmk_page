const modal = $.modal({
    title: 'Modal is mine',
    closable: true,
    content: `
        <p>Js Modal</p>
        <p>Js Modal</p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler(){
            console.log('primaty btn clicked')
            modal.close()
        }},
        {text: 'Cancel', type: 'danger', handler(){
            console.log('danger btn clicked')
            modal.close()
        }}
    ]
})