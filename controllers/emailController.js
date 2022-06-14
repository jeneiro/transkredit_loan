const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
    try {
      //mail Client
      let { title, message, email } = req.body;
      
      const transporter = nodemailer.createTransport({
        name: "mail.norrenberger.com",
        host: "outlook.office365.com",
        port: 587,
        secureConnection:false,
        secure: false,
        auth: {
          user: "noreply@norrenberger.com",
          pass: "Kuh76219",
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
  
      const msg = {
        from: "Transkredit<noreply@norrenberger.com>", // sender address
        //to: `${email}`, // list of receivers
        to: email,
        subject: title, // Subject line
        html: `
        <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">

        <!-- START HEADER/BANNER -->
        
            <tbody><tr>
              <td align="center">
                <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
                  <tbody>
        
        
        
                    <tr><img width="233" height="50" alt="Transkredit"  src="https://transkreditfinance.com/wp-content/uploads/2020/07/Transkredit-Concept-2-Adjustment-to-colors-16.png"></tr>
            <tr>
              <td align="center">
                <table align="center" class="col-600" width="600" border="0" cellspacing="0" cellpadding="0">
                  <tbody><tr>
                    <td align="center" bgcolor="#f15a29">
                      <table class="col-600" width="600" align="center" border="0" cellspacing="0" cellpadding="0">
                        <tbody><tr>
                      
                        </tr>
                        <tr>
                          <td>
        
        
                            <table class="col1" width="183" border="0" align="left" cellpadding="0" cellspacing="0">
        
                              <tbody><tr>
                              <td height="18"></td>
                              </tr>
        
                                    </tbody></table>
        
        
        
                            
                                </td>
                              </tr>
        
                            </tbody></table>
                          </td>
                        </tr>
                        <tr>
                          <td height="33"></td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
                </tbody></table>
              </td>
            </tr>
        
        
        
        
            <tr>
              <td align="center">
                <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-left:20px; margin-right:20px;">
        
        
        
            <tbody><tr>
              <td align="center">
                <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style=" border-left: 1px solid #f15a29; border-right: 1px solid #f15a29">
                  <tbody><tr>
                    <td height="50"></td>
                  </tr>
                  <tr>
                    <td align="right">
        
        
                      <table class="col2" width="287" border="0" align="right" cellpadding="0" cellspacing="0">
                        <tbody><tr>
                          <td align="center" style="line-height:0px;">
                            <img style="display:block; line-height:0px; font-size:0px; border:0px;" class="images_style" src="https://lh3.googleusercontent.com/gcucVBIAI_ZUoT0GHcmV4CUVYk8uuO3bgMndjOm5idxbTSBissyuKY1w6ophDUlBYn7i_WLf-EYv-VLaBkrBD6l8B3jDe8T_pZVPe8DCpgG06Ovzwdy_nMRLf5KGhOv5ixy8cDd7Bj0UFJeb-9S6CKI7_ysjr3h5HnJx1U6giO2MX92iRghqs70JnmT7LJGOI2IpMw5RVDRY_Pdn8blD61nu3tLUFV50hOMQ8nOArycCXa-Ja3n_tp_wdlR_9yz5qkfltoLXRkuEnQvlwt9hz19FDjp6gK_3LxdkEDEgsyYwTY9sTuKm7Z8lojaPVL145ONWgEteg6HEiWcPbGFMpWuK_zVP4-rXwEZJ6aEEjb9n1vAV1QxT2aBm05734SoHB7Xb380g8Yo7d1MqeX6ky4bq3wcpqudEWp_E9KCkOi8Qt7OYllfxy6zDeeWdG-22S30ay3a_WOTryQVw8L73X8G2VDQCiMoij6Eo1vq6HdMSTh3fWWt6hMb2mTlFMv00UkM6CTJCKWs9PEil4dRx3Hzmu2BWfbcejRqCOG4AZF6FKGL01m9aJRzGGgAHzDGLf3yWt7Gx-Y-bcNNoZ5G2_edH0vEa2TLdwjjVwyvUnUMJio3t4kMNuMH9JBZ6jRoGQxQtQ020QFER8-uRSxl2bte83yocN-jApBhZD-4WuZaOD2A6Pbe3pRj5_sT6jQJwk_8WEyx-J-q-AL7m91IDyg4YsRRcOUoT6SWQ2y0axdEx4Ylne38kXjae6k0=w338-h343-no?authuser=0" width="169" height="138">
                          </td>
                        </tr>
                      </tbody></table>
        
        
        
        
        
        
                      <table width="287" border="0" align="left" cellpadding="0" cellspacing="0" class="col2" style="">
                        <tbody><tr>
                          <td align="center">
                            <table class="insider" width="237" border="0" align="center" cellpadding="0" cellspacing="0">
        
        
        
                              <tbody><tr align="left">
                                <td style="font-family: 'Raleway', sans-serif; font-size:23px; color:#f15a29; line-height:30px; font-weight: bold;">${title}</td>
                              </tr>
        
                              <tr>
                                <td height="5"></td>
                              </tr>
        
        
                              <tr>
                                <td style="font-family: 'Lato', sans-serif; font-size:14px; color:#7f8c8d; line-height:24px; font-weight: 300;">
                                 ${message}  </td>
                              </tr>
        
        
                            </tbody></table>
                          </td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
                </tbody></table>
              </td>
            </tr>
        
        
        <!-- END WHAT WE DO -->
        
        
        
        
        
            <tr>
              <td align="center">
                <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
                  <tbody><tr>
                    <td height="50"></td>
                  </tr>
                  <tr>
                    <td align="center" bgcolor="#34495e" background="https://lh3.googleusercontent.com/A3Uz-WbmXGt4GhB6b9ZhrFduBEzaHRmDP_SmpEaUfdCbP61GQxOBxat38XcUhR4GDoM5nbT5QIgDjPPoxQ1F2KmembkkXEOS9ZPCK5p-Z5okAHVoa8MC80BWU2SfJWWqgvBU9-dzJxsX7ylvFnm1QQJtVXdzuJc-uTh-dyHDM6u6xz6H8Az5J5NIW2CFaaycukUBx0glDOVuCVMZ1V56Ifgh2hmT-SXYJLUcJzHPpEBCZE46ZVKBscg43UMvAn4XsurmyaIO_WNkrzyFCR9NaYxsLpdvJVyeqPWb2nu3yTsIDn9FCxJOFWBBUOsjnFObSBGMfl87gWugoRHbL-jJe8_aC5BHupyWlnmzW7VbAwStece-dxq8Y10aiu-yyBnryaPAkrhsBfVtDOhy056uMTaJ_R2PO28GvKLr6Fchv6g3m4s2mvfd7-mLy0qIlaDwpUeTnz4jLZlsO8QOV78GCV-s0vLDQilzzETtwyGACFQ7VkTVV8gjK_EObuamWt_bimzjdBChuVeBq-G0db8KVOGmrmCbx0jcCp9pFc_6xaxlY0cjjXvyza-5dcFyufuNgskmFbzT8MefrMPBRH_SvfOLJr5X-OYl6oXbqX3J_9WQLq2qMdVzW31_GaBNbSTWbxgrqNkKLV1sp0tQSiA_ZKFVupCTMbqbUdtScohiG1qoGDOc8AjKmt4Oo3qlFCi71bRyzIguzm54LNqmoXGrxXlWNZYbtMKvovjhf_z08R59OeQR8q7l6aj_pGU=w1165-h240-no?authuser=0" height="185">
                      <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody><tr>
                          <td height="25"></td>
                        </tr>
        
                          <tr>
                        
                          </tr>
        
        
                        <tr>
                          <td height="25"></td>
                        </tr>
        
        
        
                        </tbody></table><table align="center" width="35%" border="0" cellspacing="0" cellpadding="0">
                        <tbody><tr>
                        
        
                        
                        </tr>
                        </tbody></table>
        
        
        
                      </td></tr></tbody></table>
                    </td>
                  </tr>
                </tbody></table>
              </td>
            </tr>
        
      
        
                    
                  
                </tbody></table>
      `, // plain text body
      };
      // send mail with defined transport object
      const info = await transporter.sendMail(msg);
  
      res.send("Message Sent");
    } catch (err) {
      console.error(err);
      console.log(err);
      res.status(500).send();
    }
  };




  module.exports = { sendEmail };