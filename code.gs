function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index');
}

function uploadFiles(form) {
  try {

    var folderDes = "projectData";
    var folder, folders = DriveApp.getFoldersByName(folderDes);

    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(folderDes);
    }
    
    var home = "https://script.google.com/macros/s/AKfycbw6toqDSbFzDMKFI9g7ZRFZ_Xjv7BTcHIUGj4s7dNBnspWbwYw/exec";
    
    var file = folder.createFile(form.myFile);
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.COMMENT);
    var url = file.getUrl()
    var lecturer = form.myLecturer
    var leader = form.myleader
    var projectTitle = form.myProjectTitle
    var numGroup = form.myNumGroup
    var email = form.myEmail
    var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1Z-u9xN1q013Vin7TDLrK_X8auZwj1Ng0hirsiFc99cA/edit#gid=0");
    var sh = ss.getSheetByName('sheet1')
    ss.appendRow([new Date(), lecturer, leader, projectTitle, numGroup, email, url])
    return "คุณ.." + leader + " ชื่อโปรเจ็ค " + projectTitle+ " ส่งงานเรียบร้อยแล้ว  <p><p><a href ='"+url+"' >คลิกดูงานที่ส่ง</a> <p><a href ='"+home+"' >กลับหน้าหลัก</a>"    
  } catch (error) {
    return error.toString();
  }

}
