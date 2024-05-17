function getLatestVer(){
    var strURL = "https://www.github.com/AppliedEnergistics/Applied-Energistics-2/releases/latest";
    var self = this;
    console.log('e')
    // Mozilla/Safari
    if (window.XMLHttpRequest) {
        self.xmlHttpReq = new XMLHttpRequest();
    }
    // IE
    else if (window.ActiveXObject) {
        self.xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }
    self.xmlHttpReq.open('GET', strURL, true);
    self.xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    self.xmlHttpReq.onreadystatechange = function() {
        if (self.xmlHttpReq.readyState === 4) {
            console.log('f')
            console.log(self.xmlHttpReq.responseText);
        }
    }
}