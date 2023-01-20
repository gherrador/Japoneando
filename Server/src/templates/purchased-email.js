const nodemailer = require('nodemailer')
const { logerror } = require('../helpers/logger')

module.exports = ( order ) => {
    let message = ''

    const introduction = `
<H1>Thanks for your purchase</H1>
<br>
<span>You can follow the status of your order through the following link <a href="http://localhost:3000/list/${order._id}">Your Order!</a></span>
<br><br>
<span>If you have any questions, feel free to contact us</span>
<br><br>
<span>Below you will find the details of your order</span>
`
    let table=  (
        '<table border="1" style="border-collapse:collapse">')
    let thead = (        
        '<thead>' +
        '<th style="padding: 0.5vw">Name</th>' +
        '<th style="padding: 0.5vw"> Description </th>'  +
        '<th style="padding: 0.5vw"> Category </th>'  +
        '<th style="padding: 0.5vw"> Unit Price </th>'  +
        '<th style="padding: 0.5vw"> Quantity </th>'  +
        '<th style="padding: 0.5vw"> Photo </th>'  +
        '</thead>'
      )    
      let tbody = (
        '<tbody>'
      )
    for (let index = 0; index < order.items.length; index++) {
        const element = order.items[index];
        tbody += (            
            '<tr>' +
             '<td align="center" style="padding: 0.5vw">' + element.name + '</td>' +
             '<td align="center" style="padding: 0.5vw">' + element.description + '</td>' +
             '<td align="center" style="padding: 0.5vw">' + element.category + '</td>' +
             '<td align="center" style="padding: 0.5vw">' + element.price + '</td>' +
             '<td align="center" style="padding: 0.5vw">' + element.Qty + '</td>' +
             `<td><img src=${element.photo} style="width: 150px; height: 150px; margin-left: 20px"></img></td>` +      
           '</tr>'           
          );
    }
    let closeTable= (
        '</tbody>' +
        '</table>'
    )
    table+=thead
    table+=tbody
    table+=closeTable
    const image =`<br><br><img src="https://lh3.googleusercontent.com/GWeTc0skFUYm1ubePu19xjUZae6mDL5JzBEnHG0b9lHz97EeJCioPtgaGHN2PO2mvhiINdqRd6kYyJPHDTYyJuSCrzQvsV8WCn0TOuHUBM36SIdX3UfZmHSoJ-dW4iP27ZQ9iL7jq8B8aiisDkEJCNEzqO-zHeRF1jYgAOEzX-u6vVb_3D51HSYU5d3Gic0TURgDRfBu-0-rpznGncXCrEZLMx5jee7bDDhXdnxBG8woCrJggV96kTzFHE7p_edzFMbRIo5MVkGpNpyMXybL4Zev_pX7lTpJAfRQeMrqoPumYlyDXS6NH0LczXQQt0suBr-uJUI1sODtAhSHRCcb6osOQZorf833isnOrVL44vhadnwF-N8d36vfxXpqW2xPVQlJBX1ANdCGuH2iSGbRLMSOh9Yo-QatShEDdqBKzRsTfCNOnlOg-Iqd2vnV3Hntpd9kHQHOCQWUvCjfZywI8btPVrun2fKwhT0l1jv2uNwDksl8ptMPu41GrwUmJ4gK_mr021QP_Wv7w3U1Z9YnSwsYaku8sYa667C32Fi8DLyTka5AXWs__j-2uLBy-Vv47_bIwdXyf82GgNRcPqa4Nbr9VpUNtb7Jvxs6QmRvIxNSjtv4Y7doLBohr3SQH0SJ_iw_r18Nka2gj8Yy5OvgA958Qe-VFIrDng5vxnTiA8YvHjAJP593jR8do56NqjvPKn79VbOXXP-xd_HZfA0Q1qUWvIU1vD95xVUSQTFhHwDv7ophig32SrdkRP7ZLtF2yjSTiM_wgCHYMhboowzBpSgedlzIshhZMkkXMfwo_rckEv_Uz_CrX0GdJ5YASOEK1S4azsHh6316W3dfJjORqKJ_nGQSYsx_aP97TaMEYdPaEz77dXmCYvv3N5oy_RNm9ehB3pgIfpcxkIstNN5vhAToWHZT9K_2UL9YyttywwuyXw=w695-h117-no?authuser=0"></img>`     
    message+=introduction
    message+=table
    message+=image  
    const transporterGmail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'herradorgustavo1@gmail.com',
            pass: 'xlanyqbpxmadvgcq'
        }
    });
    const mailOptionsGmail = {
        from: 'Japoneando',
        to: order.email,
        cc: 'herradorgustavo@gmail.com',
        subject: `Thank for your purchanse in Japoneando ${order.buyer} at ${new Date().toLocaleString()}`,
        html: message,
    }

    transporterGmail.sendMail(mailOptionsGmail, (err, info) => {
        if (err) {
            logerror.error(err)
            return err
        }
    })
  }
