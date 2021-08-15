function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index');
}

function uploadFiles(form) {
  try {

    var folderDes = "xxx";       // ระบุโฟลเดอร์ที่ต้องการเก็บไฟล์อัพโหลด
    var folder, folders = DriveApp.getFoldersByName(folderDes);

    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(folderDes);
    }
    // ระบุ Web App URL
    var home = "xxx";
       
    var file = folder.createFile(form.myFile);
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.COMMENT);
    var url = file.getUrl()
    var lecturer = form.myLecturer
    var leader = form.myleader
    var projectTitle = form.myProjectTitle
    var numGroup = form.myNumGroup
    var email = form.myEmail
    var telephone = form.myTelephone
    // ระบุ ID googleSheet
    var ss = SpreadsheetApp.openById("xxx");
    var sh = ss.getSheetByName('xxx')
    ss.appendRow([new Date(), lecturer, leader, projectTitle, numGroup, email, telephone, url])
    return "ข้อมูลของ.." + leader + " ทำโปรเจ็คเรื่อง " + projectTitle+ " ได้ถูกอัพโหลดเข้าระบบเป็นที่เรียบร้อยแล้ว ขอบคุณครับ  <p><p><a href ='"+url+"' >คลิกดูงานที่ส่ง</a> <p><a href ='"+home+"' >กลับหน้าหลัก</a>"    
  } catch (error) {
    return error.toString();
  }

}
