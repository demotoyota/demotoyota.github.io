$(document).ready(function() {
    // Set up validate form
    setUpFormValidate();
    // Set up captcha.
    var allcookie = getCookie("slmsrcd1");
    $("#hdCatpcha").val(allcookie);

    $("form label").each(function() {
        $(this).attr("data-holderOriginal", $(this).text());
    });
});

function setUpFormValidate() {
    var idDlr = $("#hdIdlr").val();
    // Empty form click
    $(".btnResetForm").on("click", function() {
        EmptyFormbyReset($(this));
    });
    $('img#icpSent').on('load', function() {
        changeCapcha();
    });
    $('img#icpSentInfo').on('load', function() {
        changeCapcha();
    });

    // Send message in home
    $("#lien-he").validate({
        rules: {
            txtName: {
                required: true,
                maxlength: 255
            },
            txtPhone: {
                phoneVN: true,
                required: true,
                minlength: 10
            }
        },
        submitHandler: function(form) {
            var name = $("#txtName").val();
            var email = $("#txtEmail").val();
            var phone = $("#txtPhone").val();
            var branchId = $("#hdIsDealerSendMessage").val() == "true" ? "0" : $("#hdIsDealerSendMessage").val();
            if (phone.charAt(3) == "0") {
                phone = phone.replace("+84", "");
            }
            var address = "";
            var content = $("#txtContent").val();
            angular.element($(".btnopenMessageFromHome")).scope().PostContact(name, email, phone, address, content, idDlr, branchId);
            EmptyFormbySubmit(form);
        },
        highlight: function(element) {
            HighLightError(element);
        },
        success: function(label) {
            RemoveHighlight(label); // Remove highlight
        },
        errorPlacement: function(error, element) {
            ShowErrorByLabel(error, element);
        }
    });

    // Send message in detail product
    $("#sendMessageFromDetailProduct").validate({
        rules: {
            txtNamePro: {
                required: true,
                maxlength: 255
            },
            txtPhonePro: {
                phoneVN: true,
                required: true,
                minlength: 10
            }
            //,txtContent: {
            //    required: true,
            //    minlength: 4
            //}
            //,txtEmail: {
            //    required: true,
            //    email: true
            //}
        },
        submitHandler: function(form) {
            var name = $("#txtNamePro").val();
            var email = $("#txtEmailPro").val();
            var phone = $("#txtPhonePro").val();
            if (phone.charAt(3) == "0") {
                phone = phone.replace("+84", "");
            }
            var address = "";
            var content = $("#txtContentPro").val();
            var carname = $("#spTitleCar").text();
            var carid = $("#hdCarId").val();
            var branchId = $(".branchProDetail:checked").data("idbranch");

            angular.element($(".btnSendMSProduct")).scope().PostContactDetailProduct(name, email, phone, address, content, carname, carid, idDlr, branchId);

            EmptyFormbySubmit(form);
        },
        highlight: function(element) {
            HighLightError(element);
        },
        success: function(label) {
            RemoveHighlight(label); // Remove highlight
        },
        errorPlacement: function(error, element) {
            ShowErrorByLabel(error, element);
        }
    });

    // Send message in detail product old
    $("#sendMessageFromDetailProductOld").validate({
        rules: {
            txtNameOld: {
                required: true,
                maxlength: 255
            },
            txtPhoneOld: {
                phoneVN: true,
                required: true,
                minlength: 10
            }
            //,txtContent: {
            //    required: true,
            //    minlength: 4
            //}
            //,txtEmail: {
            //    required: true,
            //    email: true
            //}
        },
        submitHandler: function(form) {
            var name = $("#txtNameOld").val();
            var email = $("#txtEmailOld").val();
            var phone = $("#txtPhoneOld").val();
            if (phone.charAt(3) == "0") {
                phone = phone.replace("+84", "");
            }
            var address = "";
            var content = $("#txtContentOld").val();
            var carname = $("#hdTitleOld").val();
            var carid = $("#hdIdOld").val();
            var branchId = $(".branchOldDetail:checked").data("idbranch");

            angular.element($(".btnSendMSOld")).scope().PostContactDetailProductOld(name, email, phone, address, content, carname, carid, idDlr, branchId);

            EmptyFormbySubmit(form);
        },
        highlight: function(element) {
            HighLightError(element);
        },
        success: function(label) {
            RemoveHighlight(label); // Remove highlight
        },
        errorPlacement: function(error, element) {
            ShowErrorByLabel(error, element);
        }
    });

    // Send message in detail product old main
    $("#sendMessageFromDetailProductOldMain").validate({
        rules: {
            txtNameOld: {
                required: true,
                maxlength: 255
            },
            txtPhoneOld: {
                phoneVN: true,
                required: true,
                minlength: 10
            }
            //,txtContent: {
            //    required: true,
            //    minlength: 4
            //}
            //,txtEmail: {
            //    required: true,
            //    email: true
            //}
        },
        submitHandler: function (form) {
            var name = $("#txtNameOld").val();
            var email = $("#txtEmailOld").val();
            var phone = $("#txtPhoneOld").val();
            if (phone.charAt(3) == "0") {
                phone = phone.replace("+84", "");
            }
            var address = "";
            var content = $("#txtContentOld").val();
            var carname = $("#hdTitleOld").val();
            var carid = $("#hdIdOld").val();
            var idDlr = $("#hdDealerIdMain").val();
            var branchId = $(".branchOldDetail:checked").data("idbranch");

            angular.element($(".btnSendMSOld")).scope().PostContactDetailProductOldMain(name, email, phone, address, content, carname, carid, idDlr, branchId);

            EmptyFormbySubmit(form);
        },
        highlight: function (element) {
            HighLightError(element);
        },
        success: function (label) {
            RemoveHighlight(label); // Remove highlight
        },
        errorPlacement: function (error, element) {
            ShowErrorByLabel(error, element);
        }
    });

    // Send message staff
    $("#sendMessageStaff").validate({
        rules: {
            txtNameStaff: {
                required: true,
                maxlength: 255
            },
            txtPhoneStaff: {
                phoneVN: true,
                required: true,
                minlength: 10
            }
        },
        submitHandler: function(form) {
            var name = $("#txtNameStaff").val();
            var email = $("#txtEmailStaff").val();
            var phone = $("#txtPhoneStaff").val();
            if (phone.charAt(3) == "0") {
                phone = phone.replace("+84", "");
            }
            var address = "";
            var content = $("#txtContentStaff").val();
            var staffemail = $("#hdStaffEmail").val();
            var staffname = $("#spStaffName").text();
            angular.element($(".btnSend")).scope().PostMessageContactStaff(name, email, phone, address, content, staffemail, staffname, idDlr);
            EmptyFormbySubmit(form);
        },
        highlight: function(element) {
            HighLightError(element);
        },
        success: function(label) {
            RemoveHighlight(label); // Remove highlight
        },
        errorPlacement: function(error, element) {
            ShowErrorByLabel(error, element);
        }
    });

    // Test drive in tools
    $("#testDriveInTools").validate({
        //rules: {
        //    inputName: {
        //        required: true
        //    },
        //    inputEmail: {
        //        email: true
        //    },
        //    inputPhone: {
        //        required: true,
        //        phoneVN: true
        //    }
        //},
        submitHandler: function(form) {
            var lstCat = "";
            var nameCat = "";
            $("#tab_testdrive_01 .chkCats:checked").each(function() {
                lstCat += $(this).data("idcat") + ",";
                nameCat += $(this).data("namecat") + ",";
            });
            lstCat = lstCat.replace(/,$/, "");
            nameCat = nameCat.replace(/,$/, "");
            var dateVal = $("#inputDate").val();
            var dateParts = dateVal.split("/");
            var day = dateParts[0];
            var month = dateParts[1];
            var year = dateParts[2];
            if (CheckIfIsMobile()) {
                dateParts = dateVal.split("-");
                day = dateParts[2];
                month = dateParts[1];
                year = dateParts[0];
            }
            var date = (parseInt(month) < 10 ? "0" + parseInt(month) : parseInt(month)) + "/" + (parseInt(day) < 10 ? "0" + parseInt(day) : parseInt(day)) + "/" + parseInt(year);
            $("#spDate").text((parseInt(day) < 10 ? "0" + parseInt(day) : parseInt(day)) + "." + (parseInt(month) < 10 ? "0" + parseInt(month) : parseInt(month)) + "." + parseInt(year));
            $("#spDate").text((parseInt(day) < 10 ? "0" + parseInt(day) : parseInt(day)) + "." + (parseInt(month) < 10 ? "0" + parseInt(month) : parseInt(month)) + "." + parseInt(year));

            var note = $("#inputNote").val();
            var title = $("#ddlTitle").val();
            var fname = $("#inputName").val();
            var lname = $("#inputLastName").val();
            var time = $("#timePicker").val();
            var phone = $("#inputPhone").val();
            var email = $("#inputEmail").val();
            if (email.length < 3) {
                $("#showsentmail").text('');
            } else {
                $("#noshowsentmail").text('');
            }
            var adrress = $("#ddlAdrress").val();

            $(".fullname").text(title + " " + lname + " " + fname);
            $(".phone").text(phone.toLowerCase());
            $(".email").text(email.toLowerCase());
            $(".mauxe").text(nameCat);
            $(".address").text(adrress);
            $(".ghichu").text(note);
            if (CheckValueTestDrive(lstCat, day, month, year, time, title, fname, email, phone)) {
                if ($("#chkHaveLicense:checkbox:checked").length > 0) {
                    $(".testdrive_tabs .complete").removeClass("disabled");
                    $(".testdrive_tabs .tab").removeClass("active");
                    $(".testdrive_tabs .tab").find("a").removeClass("active");
                    $(".testdrive_tabs .complete").find("a").addClass("active");
                    $(".testdrive_tabs .content-tab").css("display", "none");
                    $("#tab_testdrive_04").css("display", "block");

                    angular.element($(".btnSend")).scope().PostTestDrive(lstCat, title, lname, fname, email, phone, date, time, note, adrress, idDlr);
                } else {
                    showErrorbyAlert('Đăng ký lái thử', "<p>Xin vui lòng chọn ô Tôi đã có giấy phép lái xe ô tô hợp lệ!</p>", "");
                }
            }
        },
        highlight: function(element) {
            HighLightError(element);
        },
        success: function(label) {
            RemoveHighlight(label); // Remove highlight
        },
        errorPlacement: function(error, element) {
            //ShowErrorByLabel(error, element);
            //console.log(element);
            //if ($(error).text() != "")
            //    showErrorbyAlert('', $(error).text() + " " + $(error).attr("placeholder"));
        }
    });

    $("#testDriveInToolsMain").validate({
        //rules: {
        //    inputName: {
        //        required: true
        //    },
        //    inputEmail: {
        //        email: true
        //    },
        //    inputPhone: {
        //        required: true,
        //        phoneVN: true
        //    }
        //},
        submitHandler: function (form) {
            var lstCat = "";
            var nameCat = "";
            $("#tab_testdrive_01 .chkCats:checked").each(function () {
                lstCat += $(this).data("idcat") + ",";
                nameCat += $(this).data("namecat") + ",";
            });
            lstCat = lstCat.replace(/,$/, "");
            nameCat = nameCat.replace(/,$/, "");
            var dateVal = $("#inputDate").val();
            var dateParts = dateVal.split("/");
            var day = dateParts[0];
            var month = dateParts[1];
            var year = dateParts[2];
            if (CheckIfIsMobile()) {
                dateParts = dateVal.split("-");
                day = dateParts[2];
                month = dateParts[1];
                year = dateParts[0];
            }
            var date = (parseInt(month) < 10 ? "0" + parseInt(month) : parseInt(month)) + "/" + (parseInt(day) < 10 ? "0" + parseInt(day) : parseInt(day)) + "/" + parseInt(year);
            $("#spDate").text((parseInt(day) < 10 ? "0" + parseInt(day) : parseInt(day)) + "." + (parseInt(month) < 10 ? "0" + parseInt(month) : parseInt(month)) + "." + parseInt(year));
            $("#spDate").text((parseInt(day) < 10 ? "0" + parseInt(day) : parseInt(day)) + "." + (parseInt(month) < 10 ? "0" + parseInt(month) : parseInt(month)) + "." + parseInt(year));

            var note = $("#inputNote").val();
            var title = $("#ddlTitle").val();
            var fname = $("#inputName").val();
            var lname = $("#inputLastName").val();
            var time = $("#timePicker").val();
            var phone = $("#inputPhone").val();
            var email = $("#inputEmail").val();
            if (email.length < 3) {
                $("#showsentmail").text('');
            } else {
                $("#noshowsentmail").text('');
            }
            var iDealer = $("#ddlDealer").val();
            var deaname = $("#ddlDealer").find(':selected').data('name');
            var adrress = $("#ddlAdrress").val();

            $(".fullname").text(title + " " + lname + " " + fname);
            $(".phone").text(phone.toLowerCase());
            $(".email").text(email.toLowerCase());
            $(".mauxe").text(nameCat);
            $(".deaname").text(deaname);
            $(".address").text(adrress);
            $(".ghichu").text(note);
            if (CheckValueTestDrive(lstCat, day, month, year, time, title, fname, email, phone)) {
                if ($("#chkHaveLicense:checkbox:checked").length > 0) {
                    $(".testdrive_tabs .complete").removeClass("disabled");
                    $(".testdrive_tabs .tab").removeClass("active");
                    $(".testdrive_tabs .tab").find("a").removeClass("active");
                    $(".testdrive_tabs .complete").find("a").addClass("active");
                    $(".testdrive_tabs .content-tab").css("display", "none");
                    $("#tab_testdrive_04").css("display", "block");

                    angular.element($(".btnSend")).scope().PostTestDriveMain(lstCat, title, lname, fname, email, phone, date, time, note, adrress, iDealer);
                } else {
                    showErrorbyAlert('Đăng ký lái thử', "<p>Xin vui lòng chọn ô Tôi đã có giấy phép lái xe ô tô hợp lệ!</p>", "");
                }
            }
        },
        highlight: function (element) {
            HighLightError(element);
        },
        success: function (label) {
            RemoveHighlight(label); // Remove highlight
        },
        errorPlacement: function (error, element) {
            //ShowErrorByLabel(error, element);
            //console.log(element);
            //if ($(error).text() != "")
            //    showErrorbyAlert('', $(error).text() + " " + $(error).attr("placeholder"));
        }
    });

    $("#Estimate").validate({
        //rules: {
        //    inputName: {
        //        required: true
        //    },
        //    inputEmail: {
        //        email: true
        //    },
        //    inputPhone: {
        //        required: true,
        //        phoneVN: true
        //    }
        //},
        submitHandler: function(form) {
            var lstCat = "";
            $("#tab_testdrive_01 .chkCats:checked").each(function() {
                lstCat += $(this).data("idcat") + ",";
            });
            lstCat = lstCat.replace(/,$/, "");
            var dateVal = $("#inputDate").val();
            var dateParts = dateVal.split("/");
            var day = dateParts[0];
            var month = dateParts[1];
            var year = dateParts[2];
            var date = (parseInt(month) < 10 ? "0" + parseInt(month) : parseInt(month)) + "/" + (parseInt(day) < 10 ? "0" + parseInt(day) : parseInt(day)) + "/" + parseInt(year);
            $("#spDate").text((parseInt(day) < 10 ? "0" + parseInt(day) : parseInt(day)) + "." + (parseInt(month) < 10 ? "0" + parseInt(month) : parseInt(month)) + "." + parseInt(year));
            $("#spDate").text((parseInt(day) < 10 ? "0" + parseInt(day) : parseInt(day)) + "." + (parseInt(month) < 10 ? "0" + parseInt(month) : parseInt(month)) + "." + parseInt(year));
            var phone = $("#inputPhone").val();
            var email = $("#inputEmail").val();
            var note = $("#inputNote").val();
            var title = $("#ddlTitle").val();
            var fname = $("#inputName").val();
            var lname = $("#inputLastName").val();
            var time = $("#timePicker").val();

            if (CheckValueTestDrive(lstCat, day, month, year, time, title, fname, email, phone)) {
                if ($("#chkHaveLicense:checkbox:checked").length > 0) {
                    $(".testdrive_tabs .complete").removeClass("disabled");
                    $(".testdrive_tabs .tab").removeClass("active");
                    $(".testdrive_tabs .tab").find("a").removeClass("active");
                    $(".testdrive_tabs .complete").find("a").addClass("active");
                    $(".testdrive_tabs .content-tab").css("display", "none");
                    $("#tab_testdrive_04").css("display", "block");
                    angular.element($(".btnSend")).scope()
                        .PostTestDrive(lstCat, title, lname, fname, email, phone, date, time, note, idDlr);
                } else {
                    showErrorbyAlert('Đăng ký lái thử', "<p>Bạn chưa có giấy phép lái xe ô tô hợp lệ?<p><p>Chúng tôi sẽ không thể tiếp tục việc đăng ký!</p>", "");
                }
            }
        },
        highlight: function(element) {
            HighLightError(element);
        },
        success: function(label) {
            RemoveHighlight(label); // Remove highlight
        },
        errorPlacement: function(error, element) {
            //ShowErrorByLabel(error, element);
            //console.log(element);
            //if ($(error).text() != "")
            //    showErrorbyAlert('', $(error).text() + " " + $(error).attr("placeholder"));
        }
    });

    // Service in tool in tools
    $("#SeviceRegisterInTools").validate({
        rules: {
            //inputName: {
            //    required: true
            //},
            //inputEmail: {
            //    email: true
            //},
            //inputPhone: {
            //    required: true,
            //    phoneVN: true
            //}
        },
        submitHandler: function(form) {
            //debugger;
            //var lstCat = $("#tab_dangkydichvu_01 .chkCats:checked").data("name");
            var lstCat = "";
            var length = $("#tab_dangkydichvu_01 .chkCats:checked").length;
            var index = 0;
            if (length > 0) {
                if (length == 1) {
                    lstCat = $("#tab_dangkydichvu_01 .chkCats:checked").data("name");
                } else {
                    $("#tab_dangkydichvu_01 .chkCats:checked").each(function() {
                        if (length > 0 && index == length - 1)
                            lstCat += $(this).data("name");
                        else
                            lstCat += $(this).data("name") + ", ";
                        index += 1;
                    });
                }
            }

            var dateVal = $("#inputDate").val();
            var dateParts = dateVal.split("/");
            var day = dateParts[0];
            var month = dateParts[1];
            var year = dateParts[2];
            if (CheckIfIsMobile()) {
                dateParts = dateVal.split("-");
                day = dateParts[2];
                month = dateParts[1];
                year = dateParts[0];
            }
            var date = (parseInt(month) < 10 ? "0" + parseInt(month) : parseInt(month)) + "/" + (parseInt(day) < 10 ? "0" + parseInt(day) : parseInt(day)) + "/" + parseInt(year);
            $("#spDate").text((parseInt(day) < 10 ? "0" + parseInt(day) : parseInt(day)) + "." + (parseInt(month) < 10 ? "0" + parseInt(month) : parseInt(month)) + "." + parseInt(year));
            $("#spDate").text((parseInt(day) < 10 ? "0" + parseInt(day) : parseInt(day)) + "." + (parseInt(month) < 10 ? "0" + parseInt(month) : parseInt(month)) + "." + parseInt(year));
            var dateVal2 = '20/06/1989'; // $("#inputDate2").val();
            var dateParts2 = dateVal2.split("/");
            var day2 = dateParts2[0];
            var month2 = dateParts2[1];
            var year2 = dateParts2[2];
            var date2 = (parseInt(month2) < 10 ? "0" + parseInt(month2) : parseInt(month2)) + "/" + (parseInt(day2) < 10 ? "0" + parseInt(day2) : parseInt(day2)) + "/" + parseInt(year2);
            $("#spDate2").text((parseInt(day2) < 10 ? "0" + parseInt(day2) : parseInt(day2)) + "." + (parseInt(month2) < 10 ? "0" + parseInt(month2) : parseInt(month2)) + "." + parseInt(year2));
            $("#spDate2").text((parseInt(day2) < 10 ? "0" + parseInt(day2) : parseInt(day2)) + "." + (parseInt(month2) < 10 ? "0" + parseInt(month2) : parseInt(month2)) + "." + parseInt(year2));

            var note = $("#inputNote").val();
            var title = $("#ddlTitle").val();
            var fname = $("#inputName").val();
            var lname = $("#inputLastName").val();
            var time = $("#hourPicker").val(); // + ":" + $("#minutePicker").val();
            var time2 = '10'; // $("#hourPicker2").val();// + ":" + $("#minutePicker2").val();
            var license = $("#inputLicenseCar").val().toUpperCase();
            var modelcar = $("#selectModelCar").val(); //phien ban
            var typecar = $("#selectCats").val(); //mau xe
            var yearcar = $("#inputYearCar").val();
            var phone = $("#inputPhone").val();
            var email = $("#inputEmail").val();
            if (email.length < 3) {
                $("#showsentmail").text('');
            } else {
                $("#noshowsentmail").text('');
            }
            //var adrress = $("#ddlAdrress").find(":selected").data("name");
            var adrress = $("#ddlAdrress").val();
            var employer = $("#inputEmployer").val();

            $(".fullname").text(title + " " + lname + " " + fname);
            $(".phone").text(phone.toLowerCase());
            $(".email").text(email.toLowerCase());
            $(".dichvu").text(lstCat);
            $(".phienban").text(modelcar);
            $(".mauxe").text(typecar);
            $(".address").text(adrress);
            $(".employer").text(employer);
            $(".bienso").text(license);
            $(".namsx").text(yearcar);
            $(".ghichu").text(note);
            //lstCat += ",";
            if (CheckValueServiceRegister(lstCat, day, month, year, time, title, fname, email, phone, license, modelcar, yearcar, modelcar, typecar)) {
                $(".page_dangkydichvu .tab").removeClass("active");
                $(".page_dangkydichvu .tab").find("a").removeClass("active");
                $(".page_dangkydichvu .content-tab").css("display", "none");
                $(".page_dangkydichvu .tab").addClass("disabled");
                $(".page_dangkydichvu .complete").removeClass("disabled");
                $(".page_dangkydichvu .complete").find("a").addClass("active");
                $("#tab_dangkydichvu_04").css("display", "block");
                angular.element($(".btnSend")).scope().PostRegisterService(lstCat, title, lname, fname, email, phone, date, date2, time, time2, note, license, modelcar, typecar, yearcar, adrress, employer, idDlr);
            }
        },
        highlight: function(element) {
            HighLightError(element);
        },
        success: function(label) {
            RemoveHighlight(label); // Remove highlight
        },
        errorPlacement: function(error, element) {}
    });

    $("#SeviceRegisterInToolsMain").validate({
        rules: {
            //inputName: {
            //    required: true
            //},
            //inputEmail: {
            //    email: true
            //},
            //inputPhone: {
            //    required: true,
            //    phoneVN: true
            //}
        },
        submitHandler: function (form) {
            //debugger;
            //var lstCat = $("#tab_dangkydichvu_01 .chkCats:checked").data("name");
            var lstCat = "";
            var length = $("#tab_dangkydichvu_01 .chkCats:checked").length;
            var index = 0;
            if (length > 0) {
                if (length == 1) {
                    lstCat = $("#tab_dangkydichvu_01 .chkCats:checked").data("name");
                } else {
                    $("#tab_dangkydichvu_01 .chkCats:checked").each(function () {
                        if (length > 0 && index == length - 1)
                            lstCat += $(this).data("name");
                        else
                            lstCat += $(this).data("name") + ", ";
                        index += 1;
                    });
                }
            }

            var dateVal = $("#inputDate").val();
            var dateParts = dateVal.split("/");
            var day = dateParts[0];
            var month = dateParts[1];
            var year = dateParts[2];
            if (CheckIfIsMobile()) {
                dateParts = dateVal.split("-");
                day = dateParts[2];
                month = dateParts[1];
                year = dateParts[0];
            }
            var date = (parseInt(month) < 10 ? "0" + parseInt(month) : parseInt(month)) + "/" + (parseInt(day) < 10 ? "0" + parseInt(day) : parseInt(day)) + "/" + parseInt(year);
            $("#spDate").text((parseInt(day) < 10 ? "0" + parseInt(day) : parseInt(day)) + "." + (parseInt(month) < 10 ? "0" + parseInt(month) : parseInt(month)) + "." + parseInt(year));
            $("#spDate").text((parseInt(day) < 10 ? "0" + parseInt(day) : parseInt(day)) + "." + (parseInt(month) < 10 ? "0" + parseInt(month) : parseInt(month)) + "." + parseInt(year));
            var dateVal2 = '20/06/1989'; // $("#inputDate2").val();
            var dateParts2 = dateVal2.split("/");
            var day2 = dateParts2[0];
            var month2 = dateParts2[1];
            var year2 = dateParts2[2];
            var date2 = (parseInt(month2) < 10 ? "0" + parseInt(month2) : parseInt(month2)) + "/" + (parseInt(day2) < 10 ? "0" + parseInt(day2) : parseInt(day2)) + "/" + parseInt(year2);
            $("#spDate2").text((parseInt(day2) < 10 ? "0" + parseInt(day2) : parseInt(day2)) + "." + (parseInt(month2) < 10 ? "0" + parseInt(month2) : parseInt(month2)) + "." + parseInt(year2));
            $("#spDate2").text((parseInt(day2) < 10 ? "0" + parseInt(day2) : parseInt(day2)) + "." + (parseInt(month2) < 10 ? "0" + parseInt(month2) : parseInt(month2)) + "." + parseInt(year2));

            var note = $("#inputNote").val();
            var title = $("#ddlTitle").val();
            var fname = $("#inputName").val();
            var lname = $("#inputLastName").val();
            var time = $("#hourPicker").val(); // + ":" + $("#minutePicker").val();
            var time2 = '10'; // $("#hourPicker2").val();// + ":" + $("#minutePicker2").val();
            var license = $("#inputLicenseCar").val().toUpperCase();
            var modelcar = $("#selectModelCar").val(); //phien ban
            var typecar = $("#selectCats").val(); //mau xe
            var yearcar = $("#inputYearCar").val();
            var phone = $("#inputPhone").val();
            var email = $("#inputEmail").val();
            if (email.length < 3) {
                $("#showsentmail").text('');
            } else {
                $("#noshowsentmail").text('');
            }
            //var adrress = $("#ddlAdrress").find(":selected").data("name");
            var iDealer = $("#ddlDealer").val();
            var deaname = $("#ddlDealer").find(':selected').data('name');
            var adrress = $("#ddlAdrress").val();

            var employer = $("#inputEmployer").val();

            $(".fullname").text(title + " " + lname + " " + fname);
            $(".phone").text(phone.toLowerCase());
            $(".email").text(email.toLowerCase());
            $(".dichvu").text(lstCat);
            $(".phienban").text(modelcar);
            $(".mauxe").text(typecar);
            $(".deaname").text(deaname);
            $(".address").text(adrress);
            $(".employer").text(employer);
            $(".bienso").text(license);
            $(".namsx").text(yearcar);
            $(".ghichu").text(note);
            //lstCat += ",";
            if (CheckValueServiceRegister(lstCat, day, month, year, time, title, fname, email, phone, license, modelcar, yearcar, modelcar, typecar)) {
                $(".page_dangkydichvu .tab").removeClass("active");
                $(".page_dangkydichvu .tab").find("a").removeClass("active");
                $(".page_dangkydichvu .content-tab").css("display", "none");
                $(".page_dangkydichvu .tab").addClass("disabled");
                $(".page_dangkydichvu .complete").removeClass("disabled");
                $(".page_dangkydichvu .complete").find("a").addClass("active");
                $("#tab_dangkydichvu_04").css("display", "block");
                angular.element($(".btnSend")).scope().PostRegisterServiceMain(lstCat, title, lname, fname, email, phone, date, date2, time, time2, note, license, modelcar, typecar, yearcar, adrress, employer, iDealer);
            }
        },
        highlight: function (element) {
            HighLightError(element);
        },
        success: function (label) {
            RemoveHighlight(label); // Remove highlight
        },
        errorPlacement: function (error, element) { }
    });
    
    // form send email all of tools
    $("#frmSendMailTools").validate({
        rules: {
            txtEmail_frmSendEmail: {
                required: true,
                email: true
            }
        },
        submitHandler: function(form) {
            // 1- DUTOANCHIPHI: du toan chi phi
            // 2- DANGKYLAITHU : dang ky lai thu
            // 3- SOSANHXEMOI: so sanh xe moi
            // 4- SOSANHXECU : so sanh xe cu
            // 5- HOTROTAICHINH : ho tro tai chinh
            // 6- DANGKYDICHVU : dang ky dich vu
            var fullname = $("#txtFullName_frmSendEmail").val();
            var email = $("#txtEmail_frmSendEmail").val();

            switch ($(form).data("target")) {
                case "DUTOANCHIPHI":
                    postMailEstimate(fullname, email);
                    break;
                case "SOSANHXEMOI":
                    postMailCompare(fullname, email);
                    break;
                case "HOTROTAICHINH":
                    postMailSupportFinance(fullname, email);
                    break;
                case "SOSANHXECU":
                    postMailCompareOld(fullname, email);
                    break;
                default:
                    break;
            }

            EmptyFormbySubmit(form);
        },
        highlight: function(element) {
            HighLightError(element);
        },
        success: function(label) {
            RemoveHighlight(label); // Remove highlight
        },
        errorPlacement: function(error, element) {
            ShowErrorByLabel(error, element);
        }
    });

    // form send email all of tools
    $("#dang-ky-nhan-tin").validate({
        rules: {
            txtName_GetNews: {
                required: true
            },
            txtEmail_GetNews: {
                required: true,
                email: true
            }
        },
        submitHandler: function (form) {
            var fullname = $("#txtName_GetNews").val();
            var email = $("#txtEmail_GetNews").val();

            angular.element($(".btnGetNews")).scope().PostMailReceive(fullname, email, idDlr);            

            EmptyFormbySubmit(form);
        },
        highlight: function (element) {
            HighLightError(element);
        },
        success: function (label) {
            RemoveHighlight(label); // Remove highlight
        },
        errorPlacement: function (error, element) {
            ShowErrorByLabel(error, element);
        }
    });
    // btnSend Mail
    $(".btnSendEmail").on("click", function() {
        var target = $(this).data("target");
        $("#frmSendMailTools").data("target", target);
    });
}

/*** Empty form by Reset button click ***/
function EmptyFormbyReset(element) {
    var form = $(element).closest("form");
    if (form !== undefined) {
        $(form).find("input[type='text'],input[type='email'],input[type='password'],textarea").empty();
        $(form).find("input[type='checkbox']").prop('checked', false);
        $(form).find("label").removeClass('active');
        $(form).find("input:text").first().focus();
        var refresh = $(form).find("a.idRefesh").first();
        if (refresh !== undefined) {
            $(refresh).click();
        }
    }
}
/*** Empty form by Submit button click ***/
function EmptyFormbySubmit(element) {
    $(element).find("input[type='text'],input[type='email'],input[type='password'],textarea").val("");
    $(element).find("input[type='checkbox']").prop('checked', false);
    $(element).find("label").removeClass('active');
    $(element).find("input:text").first().focus();
    var refresh = $(element).find("a.idRefesh").first();
    if (refresh !== undefined) {
        $(refresh).click();
    }
}

jQuery.validator.addMethod("phoneVN", function(value, element) {
    //value = value.replace(/\+84+/g, "").replace(/\_+/g, "").replace(/\(+/g, "").replace(/\)+/g, "").replace(/\s+/g, "");
    value = value.replace(/\+84+/g, "").replace(/\_+/g, "").replace(/\(+/g, "").replace(/\)+/g, "").replace(/\s+/g, "");
    return this.optional(element) || value.match(/^[\d]{8,12}$/);
    //return this.optional(element) || value.match(/^([1-9])[\d]{6,12}$/);
}, "Số điện thoại chưa đúng");

jQuery.validator.addMethod("email", function(value, element) {
    value = value.replace(/\s+/g, "");
    return this.optional(element) || value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-]{3,9})+\.)+([a-zA-Z]{2,4})+$/);
}, "Email chưa đúng");

jQuery.extend(jQuery.validator.messages, {
    required: "Vui lòng nhập",
    remote: "Hãy sửa cho đúng.",
    url: "Hãy nhập URL.",
    date: "Hãy nhập ngày.",
    dateISO: "Hãy nhập ngày (ISO).",
    number: "Hãy nhập số.",
    digits: "Hãy nhập chữ số.",
    creditcard: "Hãy nhập số thẻ tín dụng.",
    equalTo: "Hãy nhập thêm lần nữa.",
    extension: "Phần mở rộng không đúng.",
    maxlength: $.validator.format("Hãy nhập từ {0} kí tự trở xuống."),
    minlength: $.validator.format("Hãy nhập từ {0} kí tự trở lên."),
    rangelength: $.validator.format("Hãy nhập từ {0} đến {1} kí tự."),
    range: $.validator.format("Hãy nhập từ {0} đến {1}."),
    max: $.validator.format("Hãy nhập từ {0} trở xuống."),
    min: $.validator.format("Hãy nhập từ {1} trở lên.")
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePhone(value) {
    value = value.replace(/\+84+/g, "").replace(/\_+/g, "").replace(/\(+/g, "").replace(/\)+/g, "").replace(/\s+/g, "");
    var re = /^[\d]{8,12}$/;
    return re.test(value);
}
/* Captcha */
function CatpcSent(idicpSent) {
    var img = document.getElementById(idicpSent);
    var result = Math.random();
    img.src = "/Content/capcha/captchr.ashx?query=" + result;
}

function changeCapcha() {
    var varCaptcha = "";
    var allcookie = getCookie("slmsrcd1");
    varCaptcha = allcookie;
    $("#hdCatpcha").val(varCaptcha);
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
/***********/

/* Validate Phone*/
function keycodePhone() {
    $("#txtPhone").keypress(function(e) {
        var key = e.keyCode || e.which;
        var keychar = String.fromCharCode(key);
        var keycheck = /^(0)[0-9]{10}$/;
        if (!(key === 8 || key === 27 || key === 46 || key === 39 || key === 37)) {
            if (!keycheck.test(keychar)) {
                e.returnValue = false; //for IE
                if (e.preventDefault) {
                    e.preventDefault(); //Firefox
                }
            }
        }
    });
}
//convert string to string first toupper
function ucwords(str) {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function($1) {
        return $1.toUpperCase();
    });
}
// 10,889,187 operations/sec
function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}
// 10,875,535 operations/sec
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// 4,632,536 operations/sec
function capitalizeFirstLetter(string) {
    return string.replace(/^./, string[0].toUpperCase());
}
// 1,977,828 operations/sec   'string'.capitalizeFirstLetter();
String.prototype.capitalizeFirstLetter = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    /* - Add highlight red if element is error
     * - Set original data for text of label
     */
function HighLightError(element) {
    // Highlight bottom border element
    if (!$(element).hasClass('frmError_Validate')) {
        $(element).addClass('frmError_Validate');
    }
    var t = $("label[for=" + $(element).attr("id") + "]")[0];
    if (t !== undefined) {
        if (!$(t).hasClass('frmError_Validate')) {
            $(t).addClass('frmError_Validate');
        }
    }
}
/* - Remove class highlight for element
 *  + Remove class frmError_Validate
 */
function RemoveHighlight(label) {
    var element = document.getElementsByName(label[0].htmlFor);
    if (element[0] !== undefined) {
        // Highlight bottom border element
        if ($(element[0]).hasClass('frmError_Validate')) {
            $(element[0]).removeClass('frmError_Validate');
        }
    }
    var t = label[0].htmlFor;
    var tmp = $("label[for=" + t + "]")[0];
    if (tmp !== undefined) {
        $(tmp).text($(tmp).attr("data-holderOriginal"));
        if ($(tmp).hasClass('frmError_Validate')) {
            $(tmp).removeClass('frmError_Validate');
        }
    }
}

function ShowErrorByLabel(error, element) {
    var errorStr = $(error).text();
    var label = $("label[for=" + $(element).attr("id") + "]");
    if (label !== undefined) {
        if (errorStr.indexOf('Vui') !== -1)
            $(label).text($(error).text() + " " + $(label).data("holderoriginal"));
        else
            $(label).text($(error).text());
    }
}

function showErrorbyAlert(title, text, eleClass) {
    swal({
        title: title,
        text: text, // + "<p style='dislay: block; font-size: 0.7em; margin-top: 10px'>(Tự đóng sau 2 giây.)</p>",
        showCancelButton: false,
        confirmButtonText: "x",
        html: true,
        closeOnConfirm: true
    }, function(isConfirm) {
        $("#" + eleClass).focus();
    });
}

function showSuccessbyAlert(title, text) {
    swal({
        title: title,
        text: text, // + "<p style='dislay: block; font-size: 0.7em; margin-top: 10px'>(Tự đóng sau 2 giây.)</p>",
        //type: "success",
        showCancelButton: false,
        confirmButtonText: "x",
        html: true,
        closeOnConfirm: true
    });
}
/*function checkbefore Save*/
function CheckValue01TestDrive() {
    var lstCat = "";
    $("#tab_testdrive_01 .chkCats:checked").each(function() {
        lstCat += $(this).data("idcat") + ",";
    });
    lstCat = lstCat.replace(/,$/, "");

    if (lstCat == "") {
        showErrorbyAlert('Đăng ký lái thử', "<p>Vui lòng chọn tối thiểu 1 mẫu xe!", "");
        $(".page_testdrive .tab").find("a").removeClass("active");
        $(".page_testdrive .selectCar").find("a").addClass("active");
        $(".page_testdrive .content-tab").css("display", "none");
        $("#tab_testdrive_01").css("display", "block");
        return false;
    }
    return true;
}

function CheckValue02TestDrive() {
    var dateVal = $("#inputDate").val(); //select
    var dateParts = dateVal.split("/");
    var day = dateParts[0];
    var month = dateParts[1];
    var year = dateParts[2];
    var time = $("#timePicker").val();
    if (CheckIfIsMobile()) {
        dateParts = dateVal.split("-");
        day = dateParts[2];
        month = dateParts[1];
        year = dateParts[0];
    }
    if (day == "" || month == "" || year == "") {
        showErrorbyAlert('Đăng ký lái thử', "<p>Vui lòng chọn ngày dự kiến!<p>", "inputDate");
        $(".page_testdrive .tab").find("a").removeClass("active");
        $("a[href*='tab_testdrive_02']").addClass("active");
        $(".page_testdrive .content-tab").css("display", "none");
        $("#tab_testdrive_02").css("display", "block");
        $("#inputDate").focus();
        return false;
    }
    var today = new Date(); //os
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var hh = today.getHours();
    var m = today.getMinutes();
    if ((hh == 15 && m > 15) || hh > 15) {
        today.setDate(today.getDate() + 1);
        dd = dd + 1;
        if (yyyy > year || (yyyy = year && mm > month) || (yyyy = year && mm == month && dd > day)) { // new Date(year, month, day) < today) {//compare end <=, not >=
            showErrorbyAlert("Đăng ký lái thử", "<p>Ngày dự kiến phải lớn hơn ngày hiện tại!<p>", "");
            $(".page_testdrive .tab").find("a").removeClass("active");
            $("a[href*='tab_testdrive_02']").addClass("active");
            $(".page_testdrive .content-tab").css("display", "none");
            $("#tab_testdrive_02").css("display", "block");
            $("#inputDate").focus();
            return false;
        }
    }
    if (yyyy >= year && mm >= month && dd > day) { //if (new Date(year, month, day).getTime() - today.getTime() < 0) {//compare end <=, not >=
        showErrorbyAlert("Đăng ký lái thử", "<p>Ngày dự kiến phải lớn hơn hoặc bằng ngày hiện tại!<p>", "");
        $(".page_testdrive .tab").find("a").removeClass("active");
        $("a[href*='tab_testdrive_02']").addClass("active");
        $(".page_testdrive .content-tab").css("display", "none");
        $("#tab_testdrive_02").css("display", "block");
        $("#inputDate").focus();
        return false;
    }
    if (parseInt(day) > 31 || parseInt(day) < 1 || parseInt(month) > 12 || year.length > 4 || parseInt(month) < 1 || parseInt(year) < 1) {
        showErrorbyAlert('Đăng ký lái thử', "<p>Ngày dự kiến chưa đúng!<p>", "inputDate");
        $(".page_testdrive .tab").find("a").removeClass("active");
        $("a[href*='tab_testdrive_02']").addClass("active");
        $(".page_testdrive .content-tab").css("display", "none");
        $("#tab_testdrive_02").css("display", "block");
        $("#inputDate").focus();
        return false;
    }
    if (time == "0" || time == null) {
        showErrorbyAlert('Đăng ký lái thử', "<p>Vui lòng chọn thời gian dự kiến!<p>", "timePicker");
        $(".page_testdrive .tab").find("a").removeClass("active");
        $("a[href*='tab_testdrive_02']").addClass("active");
        $(".page_testdrive .content-tab").css("display", "none");
        $("#tab_testdrive_02").css("display", "block");
        $("#timePicker").focus();
        return false;
    }
    if ($("#testDriveInToolsMain").length > 0) {
        var Dealer = $("#ddlDealer").val();
        if (Dealer === "" || Dealer == null) {
            showErrorbyAlert('Đăng ký lái thử', "<p>Vui lòng chọn đại lý!<p>", "");
            $(".page_testdrive .tab").find("a").removeClass("active");
            $("a[href*='tab_testdrive_02']").addClass("active");
            $(".page_testdrive .content-tab").css("display", "none");
            $("#tab_testdrive_02").css("display", "block");
            $("#ddlDealer").focus();
            return false;
        }
    }
    var Adrress = $("#ddlAdrress").val();
    if (Adrress === "" || Adrress == null) {
        showErrorbyAlert('Đăng ký lái thử', "<p>Vui lòng chọn địa điểm!<p>", "");
        $(".page_testdrive .tab").find("a").removeClass("active");
        $("a[href*='tab_testdrive_02']").addClass("active");
        $(".page_testdrive .content-tab").css("display", "none");
        $("#tab_testdrive_02").css("display", "block");
        $("#ddlAdrress").focus();
        return false;
    }
    return true;
}

function CheckValue03TestDrive() {
    var phone = $("#inputPhone").val();
    var email = $("#inputEmail").val();
    var note = $("#inputNote").val();
    var title = $("#ddlTitle").val();
    var fname = $("#inputName").val();
    var lname = $("#inputLastName").val();

    if (title === "" || title == null) {
        showErrorbyAlert('Đăng ký lái thử', "<p>Vui lòng chọn danh xưng<p>", "ddlTitle");
        $(".page_testdrive .tab").find("a").removeClass("active");
        $("a[href*='tab_testdrive_03']").addClass("active");
        $(".page_testdrive .content-tab").css("display", "none");
        $("#tab_testdrive_03").css("display", "block");
        $("#ddlTitle").focus();
        return false;
    }
    if (fname == "") {
        showErrorbyAlert('Đăng ký lái thử', "<p>Vui lòng nhập tên<p>", "inputName");
        $(".page_testdrive .tab").find("a").removeClass("active");
        $("a[href*='tab_testdrive_03']").addClass("active");
        $(".page_testdrive .content-tab").css("display", "none");
        $("#tab_testdrive_03").css("display", "block");
        $("#inputName").focus();
        return false;
    }
    if (!validatePhone(phone)) {
        showErrorbyAlert('Đăng ký lái thử', "<p>Vui lòng nhập số điện thoại đúng!<p>", "inputPhone");
        $(".page_testdrive .tab").find("a").removeClass("active");
        $("a[href*='tab_testdrive_03']").addClass("active");
        $(".page_testdrive .content-tab").css("display", "none");
        $("#tab_testdrive_03").css("display", "block");
        $("#inputPhone").focus();
        return false;
    }
    //if (email === "" || email == null) {
    //    showErrorbyAlert('Đăng ký lái thử', "<p>Vui lòng nhập email<p>", "inputEmail");
    //    $(".page_testdrive .tab").find("a").removeClass("active");
    //    $("a[href*='tab_testdrive_03']").addClass("active");
    //    $(".page_testdrive .content-tab").css("display", "none");
    //    $("#tab_testdrive_03").css("display", "block");
    //    $("#inputEmail").focus();
    //    return false;
    //}
    //if (!validateEmail(email)) {
    //    showErrorbyAlert('Đăng ký lái thử', "<p>Vui lòng nhập đúng định dạng email!<p>", "inputEmail");
    //    $(".page_testdrive .tab").find("a").removeClass("active");
    //    $("a[href*='tab_testdrive_03']").addClass("active");
    //    $(".page_testdrive .content-tab").css("display", "none");
    //    $("#tab_testdrive_03").css("display", "block");
    //    $("#inputEmail").focus();
    //    return false;
    //}
    return true;
}

function CheckValueTestDrive(lstCat, day, month, year, time, title, fname, email, phone) {
    if (lstCat == "") {
        showErrorbyAlert('Đăng ký lái thử', "<p>Vui lòng chọn tối đa 3 mẫu xe!", "");
        $(".page_testdrive .tab").find("a").removeClass("active");
        $(".selectCar").find("a").addClass("active");
        $(".page_testdrive .content-tab").css("display", "none");
        $("#tab_testdrive_01").css("display", "block");
        return false;
    }
    if (day == "" || month == "" || year == "") {
        showErrorbyAlert('Đăng ký lái thử', "<p>Vui lòng chọn ngày dự kiến!<p>", "inputDate");
        $(".page_testdrive .tab").find("a").removeClass("active");
        $("a[href*='tab_testdrive_02']").addClass("active");
        $(".page_testdrive .content-tab").css("display", "none");
        $("#tab_testdrive_02").css("display", "block");
        $("#inputDate").focus();
        return false;
    }
    if (parseInt(day) > 31 || parseInt(day) < 1 || parseInt(month) > 12 || year.length > 4 || parseInt(month) < 1 || parseInt(year) < 1) {
        showErrorbyAlert('Đăng ký lái thử', "<p>Ngày dự kiến chưa đúng!<p>", "inputDate");
        $(".page_testdrive .tab").find("a").removeClass("active");
        $("a[href*='tab_testdrive_02']").addClass("active");
        $(".page_testdrive .content-tab").css("display", "none");
        $("#tab_testdrive_02").css("display", "block");
        $("#inputDate").focus();
        return false;
    }
    if (time == "0" || time == null) {
        showErrorbyAlert('Đăng ký lái thử', "<p>Vui lòng chọn thời gian dự kiến!<p>", "timePicker");
        $(".page_testdrive .tab").find("a").removeClass("active");
        $("a[href*='tab_testdrive_02']").addClass("active");
        $(".page_testdrive .content-tab").css("display", "none");
        $("#tab_testdrive_02").css("display", "block");
        $("#timePicker").focus();
        return false;
    }
    if (title === "" || title == null) {
        showErrorbyAlert('Đăng ký lái thử', "<p>Vui lòng chọn danh xưng<p>", "ddlTitle");
        $(".page_testdrive .tab").find("a").removeClass("active");
        $("a[href*='tab_testdrive_03']").addClass("active");
        $(".page_testdrive .content-tab").css("display", "none");
        $("#tab_testdrive_03").css("display", "block");
        $("#ddlTitle").focus();
        return false;
    }
    if (fname == "") {
        showErrorbyAlert('Đăng ký lái thử', "<p>Vui lòng nhập tên<p>", "inputName");
        $(".page_testdrive .tab").find("a").removeClass("active");
        $("a[href*='tab_testdrive_03']").addClass("active");
        $(".page_testdrive .content-tab").css("display", "none");
        $("#tab_testdrive_03").css("display", "block");
        $("#inputName").focus();
        return false;
    }
    if (!validatePhone(phone)) {
        showErrorbyAlert('Đăng ký lái thử', "<p>Vui lòng nhập số điện thoại đúng!<p>", "inputPhone");
        $(".page_testdrive .tab").find("a").removeClass("active");
        $("a[href*='tab_testdrive_03']").addClass("active");
        $(".page_testdrive .content-tab").css("display", "none");
        $("#tab_testdrive_03").css("display", "block");
        $("#inputPhone").focus();
        return false;
    }
    //if (email === "" || email == null) {
    //    showErrorbyAlert('Đăng ký lái thử', "<p>Vui lòng nhập email<p>", "inputEmail");
    //    $(".page_testdrive .tab").find("a").removeClass("active");
    //    $("a[href*='tab_testdrive_03']").addClass("active");
    //    $(".page_testdrive .content-tab").css("display", "none");
    //    $("#tab_testdrive_03").css("display", "block");
    //    $("#inputEmail").focus();
    //    return false;
    //}
    //if (!validateEmail(email)) {
    //    showErrorbyAlert('Đăng ký lái thử', "<p>Vui lòng nhập đúng định dạng email!<p>", "inputEmail");
    //    $(".tab").find("a").removeClass("active");
    //    $("a[href*='tab_testdrive_03']").addClass("active");
    //    $(".page_testdrive .content-tab").css("display", "none");
    //    $("#tab_testdrive_03").css("display", "block");
    //    $("#inputEmail").focus();
    //    return false;
    //}
    return true;
}

function CheckValue01ServiceRegister() {
    var lstCat = $("#tab_dangkydichvu_01 .chkCats:checked").data("name");
    if (lstCat == "" || lstCat == undefined || lstCat == null) {
        showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng chọn 1 dịch vụ!<p>", "");
        $(".page_dangkydichvu .tab").find("a").removeClass("active");
        $(".selectService").find("a").addClass("active");
        $(".page_dangkydichvu .content-tab").css("display", "none");
        $("#tab_dangkydichvu_01").css("display", "block");
        return false;
    }
    return true;
}

function CheckValue02ServiceRegister() {
    var dateVal = $("#inputDate").val();
    var dateParts = dateVal.split("/");
    var day = dateParts[0];
    var month = dateParts[1];
    var year = dateParts[2];
    if (CheckIfIsMobile()) {
        dateParts = dateVal.split("-");
        day = dateParts[2];
        month = dateParts[1];
        year = dateParts[0];
    }

    if (day == "" || month == "" || year == "") { // || year == ""
        showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng chọn ngày dự kiến!<p>", "");
        $(".page_dangkydichvu .tab").find("a").removeClass("active");
        $("a[href*='tab_dangkydichvu_02']").addClass("active");
        $(".page_dangkydichvu .content-tab").css("display", "none");
        $("#tab_dangkydichvu_02").css("display", "block");
        $("#inputDate").focus();
        return false;
    }

    var today = new Date(); //os
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var hh = today.getHours();
    var m = today.getMinutes();
    if (yyyy > year || (yyyy = year && mm > month) || (yyyy = year && mm == month && dd > day)) { //if (new Date(year, month, day).getTime() - today.getTime() < 0) {//compare end <=, not >=
        showErrorbyAlert("Đặt lịch hẹn dịch vụ", "<p>Ngày dự kiến phải lớn hơn hoặc bằng ngày hiện tại!<p>", "");
        $(".page_dangkydichvu .tab").find("a").removeClass("active");
        $("a[href*='tab_dangkydichvu_02']").addClass("active");
        $(".page_dangkydichvu .content-tab").css("display", "none");
        $("#tab_dangkydichvu_02").css("display", "block");
        $("#inputDate").focus();
        return false;
    }
    //var dateVal2 = $("#inputDate2").val();
    //var dateParts2 = dateVal2.split("/");
    //var day2 = dateParts2[0];
    //var month2 = dateParts2[1];
    //var year2 = dateParts2[2];
    var time = $("#hourPicker").val(); // + ":" + $("#minutePicker").val();
    //var time2 = $("#hourPicker2").val();// + ":" + $("#minutePicker2").val();

    if (parseInt(day) > 31 || parseInt(day) < 1 || parseInt(month) > 12 || year.length > 4 || parseInt(month) < 1) { // || parseInt(year) < 1
        showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Ngày dự kiến chưa đúng!<p>", "");
        $(".page_dangkydichvu .tab").find("a").removeClass("active");
        $("a[href*='tab_dangkydichvu_02']").addClass("active");
        $(".page_dangkydichvu .content-tab").css("display", "none");
        $("#tab_dangkydichvu_02").css("display", "block");
        $("#inputDate").focus();
        return false;
    }
    if (time == "0" || time == null) {
        showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng chọn thời gian dự kiến!<p>", "");
        $(".page_dangkydichvu .tab").find("a").removeClass("active");
        $("a[href*='tab_dangkydichvu_02']").addClass("active");
        $(".page_dangkydichvu .content-tab").css("display", "none");
        $("#tab_dangkydichvu_02").css("display", "block");
        $("#timePicker").focus();
        return false;
    }
    if ($("#SeviceRegisterInToolsMain").length > 0) {
        var Dealer = $("#ddlDealer").val();
        if (Dealer === "" || Dealer == null) {
            showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng chọn đại lý!<p>", "");
            $(".page_dangkydichvu .tab").find("a").removeClass("active");
            $("a[href*='tab_dangkydichvu_02']").addClass("active");
            $(".page_dangkydichvu .content-tab").css("display", "none");
            $("#tab_dangkydichvu_02").css("display", "block");
            $("#ddlDealer").focus();
            return false;
        }
    }
    var Adrress = $("#ddlAdrress").val();
    if (Adrress === "" || Adrress == null) {
        showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng chọn địa điểm!<p>", "");
        $(".page_dangkydichvu .tab").find("a").removeClass("active");
        $("a[href*='tab_dangkydichvu_02']").addClass("active");
        $(".page_dangkydichvu .content-tab").css("display", "none");
        $("#tab_dangkydichvu_02").css("display", "block");
        $("#ddlAdrress").focus();
        return false;
    }
    //if (day2 == "" || month2 == "") {// || year == ""
    //    showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng chọn ngày nhận mong muốn!<p>", "");
    //    $(".page_dangkydichvu .tab").find("a").removeClass("active");
    //    $("a[href*='tab_dangkydichvu_02']").addClass("active");
    //    $(".page_dangkydichvu .content-tab").css("display", "none");
    //    $("#tab_dangkydichvu_02").css("display", "block");
    //    $("#inputDate").focus();
    //    return false;
    //}
    //if (parseInt(day2) > 31 || parseInt(day2) < 1 || parseInt(month2) > 12 || year2.length > 4 || parseInt(month2) < 1) {// || parseInt(year) < 1
    //    showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Ngày nhận mong muốn chưa đúng!<p>", "");
    //    $(".page_dangkydichvu .tab").find("a").removeClass("active");
    //    $("a[href*='tab_dangkydichvu_02']").addClass("active");
    //    $(".page_dangkydichvu .content-tab").css("display", "none");
    //    $("#tab_dangkydichvu_02").css("display", "block");
    //    $("#inputDate").focus();
    //    return false;
    //}
    //if (time2 == "0" || time2 == null) {
    //    showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng chọn thời gian nhận mong muốn!<p>", "");
    //    $(".page_dangkydichvu .tab").find("a").removeClass("active");
    //    $("a[href*='tab_dangkydichvu_02']").addClass("active");
    //    $(".page_dangkydichvu .content-tab").css("display", "none");
    //    $("#tab_dangkydichvu_02").css("display", "block");
    //    $("#timePicker").focus();
    //    return false;
    //}

    var date = new Date();
    if (year != "" && (parseInt(year) < 1950 || parseInt(year) > date.getFullYear())) {
        showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng nhập năm sản xuất<p> <i>(Từ 1950 đến nay)</i>", "inputYearCar");
        $(".page_dangkydichvu .tab").find("a").removeClass("active");
        $("a[href*='tab_dangkydichvu_03']").addClass("active");
        $(".page_dangkydichvu .content-tab").css("display", "none");
        $("#tab_dangkydichvu_03").css("display", "block");
        $("#inputYearCar").focus();
        return false;
    }
    return true;
}

function CheckValue03ServiceRegister() {
    var phone = $("#inputPhone").val();
    var email = $("#inputEmail").val();
    var note = $("#inputNote").val();
    var title = $("#ddlTitle").val();
    var fname = $("#inputName").val();
    var lname = $("#inputLastName").val();
    var license = $("#inputLicenseCar").val();
    var modelcar = $("#inputModelCar").val();
    var typecar = $("#selectCats").val();
    var yearcar = $("#inputYearCar").val();
    var adrress = $("#ddlAdrress").find(":selected").data("name");

    if (title === "" || title == null) {
        showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng chọn danh xưng<p>", "");
        $(".page_dangkydichvu .tab").find("a").removeClass("active");
        $("a[href*='tab_dangkydichvu_03']").addClass("active");
        $(".page_dangkydichvu .content-tab").css("display", "none");
        $("#tab_dangkydichvu_03").css("display", "block");
        $("#ddlTitle").focus();
        return false;
    }
    if (fname == "") {
        showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng nhập tên<p>", "inputName");
        $(".page_dangkydichvu .tab").find("a").removeClass("active");
        $("a[href*='tab_dangkydichvu_03']").addClass("active");
        $(".page_dangkydichvu .content-tab").css("display", "none");
        $("#tab_dangkydichvu_03").css("display", "block");
        $("#inputName").focus();
        return false;
    }
    if (phone == "" || phone == null) {
        showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng nhập số điện thoại!<p>", "inputPhone");
        $(".page_dangkydichvu .tab").find("a").removeClass("active");
        $("a[href*='tab_dangkydichvu_03']").addClass("active");
        $(".page_dangkydichvu .content-tab").css("display", "none");
        $("#tab_dangkydichvu_03").css("display", "block");
        $("#inputPhone").focus();
        return false;
    }
    if (!validatePhone(phone)) {
        showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng nhập đúng định dạng số điện thoại!<p>", "inputPhone");
        $(".page_dangkydichvu .tab").find("a").removeClass("active");
        $("a[href*='tab_dangkydichvu_03']").addClass("active");
        $(".page_dangkydichvu .content-tab").css("display", "none");
        $("#tab_dangkydichvu_03").css("display", "block");
        $("#inputPhone").focus();
        return false;
    }
    //if (typecar === "" || typecar == null) {
    //    showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng chọn mẫu xe<p>", "");
    //    $(".page_dangkydichvu .tab").find("a").removeClass("active");
    //    $("a[href*='tab_dangkydichvu_03']").addClass("active");
    //    $(".page_dangkydichvu .content-tab").css("display", "none");
    //    $("#tab_dangkydichvu_03").css("display", "block");
    //    $("#selectCats").focus();
    //    return false;
    //}
    //if (modelcar === "" || modelcar == null) {
    //    showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng nhập phiên bản xe<p>", "");
    //    $(".page_dangkydichvu .tab").find("a").removeClass("active");
    //    $("a[href*='tab_dangkydichvu_03']").addClass("active");
    //    $(".page_dangkydichvu .content-tab").css("display", "none");
    //    $("#tab_dangkydichvu_03").css("display", "block");
    //    $("#inputModelCar").focus();
    //    return false;
    //}
    //if (email === "" || email == null || !validateEmail(email)) {
    //    showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng nhập email<p>", "inputEmail");
    //    $(".page_dangkydichvu .tab").find("a").removeClass("active");
    //    $("a[href*='tab_dangkydichvu_03']").addClass("active");
    //    $(".page_dangkydichvu .content-tab").css("display", "none");
    //    $("#tab_dangkydichvu_03").css("display", "block");
    //    $("#inputEmail").focus();
    //    return false;
    //}
    if (license === "" || license == null) {
        showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng nhập biển số xe<p>", "inputLicenseCar");
        $(".page_dangkydichvu .tab").find("a").removeClass("active");
        $("a[href*='tab_dangkydichvu_03']").addClass("active");
        $(".page_dangkydichvu .content-tab").css("display", "none");
        $("#tab_dangkydichvu_03").css("display", "block");
        $("#inputLicenseCar").focus();
        return false;
    }

    //if (modelcar === "" || modelcar == null) {
    //    showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng nhập mẫu xe<p>", "inputModelCar");
    //    $(".page_dangkydichvu .tab").find("a").removeClass("active");
    //    $("a[href*='tab_dangkydichvu_03']").addClass("active");
    //    $(".page_dangkydichvu .content-tab").css("display", "none");
    //    $("#tab_dangkydichvu_03").css("display", "block");
    //    $("#inputModelCar").focus();
    //    return false;
    //}
    //var date = new Date();
    //if (yearcar != "" && (parseInt(yearcar) < 1950 || parseInt(yearcar) > date.getFullYear())) {
    //    showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng nhập năm sản xuất<p> <p>(Từ 1950 đến nay)</p>", "inputYearCar");
    //    $(".page_dangkydichvu .tab").find("a").removeClass("active");
    //    $("a[href*='tab_dangkydichvu_03']").addClass("active");
    //    $(".page_dangkydichvu .content-tab").css("display", "none");
    //    $("#tab_dangkydichvu_03").css("display", "block");
    //    $("#inputYearCar").focus();
    //    return false;
    //}
    return true;
}

function CheckValueServiceRegister(lstCat, day, month, year, time, title, fname, email, phone, license, modelcar, yearcar, modelcar, typecar) {

    if (lstCat == "" || lstCat == undefined || lstCat == null) {
        showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng chọn 1 dịch vụ!<p>", "");
        $(".page_dangkydichvu .tab").find("a").removeClass("active");
        $(".selectService").find("a").addClass("active");
        $(".page_dangkydichvu .content-tab").css("display", "none");
        $("#tab_dangkydichvu_01").css("display", "block");
        return false;
    }
    if (day == "" || month == "") { // || year == ""
        showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng chọn ngày dự kiến!<p>", "");
        $(".page_dangkydichvu .tab").find("a").removeClass("active");
        $("a[href*='tab_dangkydichvu_02']").addClass("active");
        $(".page_dangkydichvu .content-tab").css("display", "none");
        $("#tab_dangkydichvu_02").css("display", "block");
        $("#inputDate").focus();
        return false;
    }
    if (parseInt(day) > 31 || parseInt(day) < 1 || parseInt(month) > 12 || year.length > 4 || parseInt(month) < 1) { // || parseInt(year) < 1
        showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Ngày dự kiến chưa đúng!<p>", "");
        $(".page_dangkydichvu .tab").find("a").removeClass("active");
        $("a[href*='tab_dangkydichvu_02']").addClass("active");
        $(".page_dangkydichvu .content-tab").css("display", "none");
        $("#tab_dangkydichvu_02").css("display", "block");
        $("#inputDate").focus();
        return false;
    }
    if (time == "0" || time == null) {
        showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng chọn thời gian dự kiến!<p>", "");
        $(".page_dangkydichvu .tab").find("a").removeClass("active");
        $("a[href*='tab_dangkydichvu_02']").addClass("active");
        $(".page_dangkydichvu .content-tab").css("display", "none");
        $("#tab_dangkydichvu_02").css("display", "block");
        $("#timePicker").focus();
        return false;
    }
    if (title === "" || title == null) {
        showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng chọn danh xưng<p>", "");
        $(".page_dangkydichvu .tab").find("a").removeClass("active");
        $("a[href*='tab_dangkydichvu_03']").addClass("active");
        $(".page_dangkydichvu .content-tab").css("display", "none");
        $("#tab_dangkydichvu_03").css("display", "block");
        $("#ddlTitle").focus();
        return false;
    }
    if (fname == "") {
        showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng nhập tên<p>", "inputName");
        $(".page_dangkydichvu .tab").find("a").removeClass("active");
        $("a[href*='tab_dangkydichvu_03']").addClass("active");
        $(".page_dangkydichvu .content-tab").css("display", "none");
        $("#tab_dangkydichvu_03").css("display", "block");
        $("#inputName").focus();
        return false;
    }
    if (phone == "" || phone == null) {
        showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng nhập số điện thoại!<p>", "inputPhone");
        $(".page_dangkydichvu .tab").find("a").removeClass("active");
        $("a[href*='tab_dangkydichvu_03']").addClass("active");
        $(".page_dangkydichvu .content-tab").css("display", "none");
        $("#tab_dangkydichvu_03").css("display", "block");
        $("#inputPhone").focus();
        return false;
    }
    if (!validatePhone(phone)) {
        showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng nhập đúng định dạng số điện thoại!<p>", "inputPhone");
        $(".page_dangkydichvu .tab").find("a").removeClass("active");
        $("a[href*='tab_dangkydichvu_03']").addClass("active");
        $(".page_dangkydichvu .content-tab").css("display", "none");
        $("#tab_dangkydichvu_03").css("display", "block");
        $("#inputPhone").focus();
        return false;
    }
    //if (typecar === "" || typecar == null) {
    //    showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng chọn mẫu xe<p>", "");
    //    $(".page_dangkydichvu .tab").find("a").removeClass("active");
    //    $("a[href*='tab_dangkydichvu_03']").addClass("active");
    //    $(".page_dangkydichvu .content-tab").css("display", "none");
    //    $("#tab_dangkydichvu_03").css("display", "block");
    //    $("#selectCats").focus();
    //    return false;
    //}
    //if (modelcar === "" || modelcar == null) {
    //    showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng nhập phiên bản xe<p>", "");
    //    $(".page_dangkydichvu .tab").find("a").removeClass("active");
    //    $("a[href*='tab_dangkydichvu_03']").addClass("active");
    //    $(".page_dangkydichvu .content-tab").css("display", "none");
    //    $("#tab_dangkydichvu_03").css("display", "block");
    //    $("#inputModelCar").focus();
    //    return false;
    //}
    //if (email === "" || email == null || !validateEmail(email)) {
    //    showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng nhập email<p>", "inputEmail");
    //    $(".page_dangkydichvu .tab").find("a").removeClass("active");
    //    $("a[href*='tab_dangkydichvu_03']").addClass("active");
    //    $(".page_dangkydichvu .content-tab").css("display", "none");
    //    $("#tab_dangkydichvu_03").css("display", "block");
    //    $("#inputEmail").focus();
    //    return false;
    //}
    if (license === "" || license == null) {
        showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng nhập biển số xe<p>", "inputLicenseCar");
        $(".page_dangkydichvu .tab").find("a").removeClass("active");
        $("a[href*='tab_dangkydichvu_03']").addClass("active");
        $(".page_dangkydichvu .content-tab").css("display", "none");
        $("#tab_dangkydichvu_03").css("display", "block");
        $("#inputLicenseCar").focus();
        return false;
    }

    //if (modelcar === "" || modelcar == null) {
    //    showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng nhập mẫu xe<p>", "inputModelCar");
    //    $(".page_dangkydichvu .tab").find("a").removeClass("active");
    //    $("a[href*='tab_dangkydichvu_03']").addClass("active");
    //    $(".page_dangkydichvu .content-tab").css("display", "none");
    //    $("#tab_dangkydichvu_03").css("display", "block");
    //    $("#inputModelCar").focus();
    //    return false;
    //}
    //var date = new Date();
    //if (yearcar === "" || yearcar == null || isNaN(parseInt(yearcar)) || parseInt(yearcar) < 1950 || parseInt(yearcar) > date.getFullYear()) {
    //    showErrorbyAlert('Đặt lịch hẹn dịch vụ', "<p>Vui lòng nhập năm sản xuất<p> <i>(Từ 1950 đến nay)</i>", "inputYearCar");
    //    $(".page_dangkydichvu .tab").find("a").removeClass("active");
    //    $("a[href*='tab_dangkydichvu_03']").addClass("active");
    //    $(".page_dangkydichvu .content-tab").css("display", "none");
    //    $("#tab_dangkydichvu_03").css("display", "block");
    //    $("#inputYearCar").focus();
    //    return false;
    //}
    return true;
}



// Analytics Click tools count
function postUserClickTools(carId, type) {
    $.getJSON("http://jsonip.com/?callback=?", function(data) {
        var ip = data.ip;
        var idDlr = $("#hdIdlr").val();
        var api = $("#hdApiUrl").val();
        var link = api + "/api/Tools/PostHistory?modelId=" + carId + "&IpAddress=" + ip + "&iDealer=" + idDlr + "&type=" + type;
        var awesomeToyota = toyotaDealerLog();
        $.ajax({
            type: "Post",
            url: link,
            headers: {
                'Authorization': 'X-XSRF-Token ' + awesomeToyota,
                'X-XSRF-Token': awesomeToyota,
                'Content-Type': 'application/json'
            },
            success: function(data) {
                var str = "";
                for (var i = 0; i < data.length; i++) {
                    if (i < data.length - 1)
                        str += data[i] + ",";
                    else
                        str += data[i];
                }
                $("#hdContent_Anylytics").val(str);
            }
        });
    });
}

/***************************************/
/***** Post mail in tools function ****/
function postMailEstimate(fullname, email) {
    var selectCar = $(".checkCarTool:checked");
    var idDlr = $("#hdIdlr").val();
    var thongtintruocba = $("#hddlistEstimate").val();
    var phukien = $("#hddlistAccessSelected").val();
    var tongtien = $(".priceOfCarSelectedTool_Sum").html();
    var tenxe = $(".nameOfCarSelectedTool").html();
    var tienxe = $(".priceOfCarSelectedTool").html();
    var mauxe = $(".colorOfCarSelectedTool").html();

    var ids = $("#hdContent_Anylytics").val();

    angular.element($(".btnSendEmail")).scope().SentMailDuToanChiPhi(ids, fullname, email, tenxe, tienxe, mauxe, thongtintruocba, phukien, tongtien, idDlr);

   // $(".btnSendEmail").addClass("disabled-button");
    $(".btnSendEmail").parent().addClass("disabled-button");
    $("#hdContent_Anylytics").val("");
}

function postMailCompare(fullname, email) {
    var ids = $("#hdContent_Anylytics").val();
    var idDlr = $("#hdIdlr").val();
    var strTable = "";
    strTable += "<table cellpadding='10' cellspacing='0'>";

    strTable += "<tr>";
    strTable += "<td></td>";
    $(".nameValue").each(function () {
        var txt2 = $(this).find("span.txt2");
        var name = $(txt2).find("span.name").text().trim();
        var price = $(txt2).find("span.price").text().trim();
        strTable += "<td><strong>" + name + "</strong><br/><p>"+ price +"</p></td>";
    });
    strTable += "</tr>";

    strTable += "<tr>";
    strTable += "<td></td>";
    $(".priceValue").each(function() {
        strTable += "<td>" + $(this).text().trim() + "</td>";
    });
    strTable += "</tr>";

    var i = 0;
    $(".tqrowlst").each(function() {
        if (i % 2 == 0)
            strTable += "<tr style='background-color:aliceblue'>";
        else
            strTable += "<tr>";
        strTable += "<td>" + $(this).text() + "</td>";
        $(".tqtablelst" + i).each(function() {
            strTable += $(this).html();
        });
        i++;
        strTable += "</tr>";
    });

    strTable += "</table>";

    var carids = "";
    $('.ckCompareCarChecked[data-carid]').each(function () {
        carids += $(this).data().carid + ",";
    });
    //console.log(carids);

    angular.element($(".btnSendEmail")).scope().SentMailSoSanhXeMoi(carids, ids, fullname, email, strTable, idDlr);

    //$(".btnSendEmail").addClass("disabled-button");
    $(".btnSendEmail").parent().addClass("disabled-button");
    $("#hdContent_Anylytics").val("");
}

function postMailSupportFinance(fullname, email) {
    var ids = $("#hdContent_Anylytics").val();

    var idDlr = $("#hdIdlr").val();
    var stenxe = $('.spResultTitle').html();
    var stienxe = $('.spResultPrice').html();
    var smauxe = $('.colorOfCarSelectedTool').html();
    var stienphukien = $('.spResultAccesoryPrice').html();
    var stientratruoc = $('.spResultFirstPrice').html();
    var supportProduct = $("#ddlSupporProduct").val();
    var stiendautien = $('.spPriceTotal').html();
    var stientindung = $('#spOwnPrice').html();
    var sgoclaicuoiki = $('.spPriceTotal5050').html();

    //Lấy link file download
    var sLinkdownload = "";
    var priceOfCar = parseFloat(RemoveAllPoint($("#ddlMausac").val()));
    var accessoryPrice = parseFloat(RemoveAllPoint($("#txtAccessoryPrice").val() == "" || $("#txtAccessoryPrice").val() == "0" ?
        "0" :
        $("#txtAccessoryPrice").val()));
    var sumOfPrice = priceOfCar + accessoryPrice;
    var timeFor = parseInt($("#ddlTimeFor").val()) * 12; // so thang
    var payMethod = $("#ddlPayMethod").val();
    //payMethod = payMethod.replace(/Theo/g, "Hàng");
    var firstMoney = parseFloat(RemoveAllPoint($("#txtFirstMoney").val()));
    var ownPrice = (priceOfCar + accessoryPrice) - firstMoney;
    var type = 0;
    var balloon = parseFloat(RemoveAllPoint($("#txtFinalSeptem").val() == "" ? "0" : $("#txtFinalSeptem").val()));

    switch (supportProduct) {
        case '0': // sp truyen thong
            type = payMethod; // 0: theo thang, 1: theo quy
            break;
        case '1': // sp 50/50
            type = 4;
            break;
        case '2': // sp balloon
            type = parseInt(payMethod) + 2; // (0+2) 2: theo thang, (1+2) 3: theo quy
            break;
    }

    //Kiểm tra nếu là xe Innova thì tải file riêng
    var selectCar = $(".checkCarTool:checked");
    var url = $(selectCar).data("url");
    var res = url.match(/innova/g);
    if (res != null) {
        type = parseInt(payMethod) + 5;// (0+5) 5: theo thang, (1+5) 6: theo quy
    }
    var t = {
        iTypeFile: type,
        sSoTienMuaXe: sumOfPrice,
        sSoTienVay: ownPrice,
        sThoiGianVay: timeFor,
        Balloon: balloon
    }
    $.ajax({
        type: 'POST',
        url: 'http://www.toyota.com.vn/export-files-estimate',
        data: JSON.stringify(t),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function(returnValue) {
            sLinkdownload = returnValue;
            angular.element($(".btnSendEmail")).scope().SentMailHoTroTaiChinh(ids, fullname, email, stenxe, stienxe, smauxe, stienphukien, stientratruoc, stiendautien, stientindung, supportProduct, sgoclaicuoiki, idDlr, sLinkdownload);
        }
    });

    //$(".btnSendEmail").addClass("disabled-button");
    $(".btnSendEmail").parent().addClass("disabled-button");
    $("#hdContent_Anylytics").val("");
}

function postMailCompareOld(fullname, email) {
    var ids = $("#hdContent_Anylytics").val();
    if (email != "") {
        var api = $("#hdApiUrl").val();
        var idDlr = $("#hdIdlr").val();
        //var thongso = document.getElementById('tab_dt_tongquan').innerHTML;

        var strTable = "";
        strTable += "<table cellpadding='10' cellspacing='0'>";

        strTable += "<tr>";
        strTable += "<td></td>";
        $(".nameValue").each(function () {
            var txt2 = $(this).find("span.txt2");
            var name = $(txt2).find("span.name").text().trim();
            var price = $(txt2).find("span.price").text().trim();
            strTable += "<td><strong>" + name + "</strong><br/><p>" + price + "</p></td>";
        });
        strTable += "</tr>";

        strTable += "<tr>";
        strTable += "<td></td>";
        $(".priceValue").each(function() {
            strTable += "<td>" + $(this).text().trim() + "</td>";
        });
        strTable += "</tr>";

        var i = 0;
        $(".tqrowlst").each(function() {
            if (i % 2 == 0)
                strTable += "<tr style='background-color:aliceblue'>";
            else
                strTable += "<tr>";
            strTable += "<td>" + $(this).text() + "</td>";
            $(".tqtablelst" + i).each(function() {
                strTable += $(this).html();
            });
            i++;
            strTable += "</tr>";
        });

        strTable += "</table>";
        //angular.element($(".sentMailSoSanhXeCu")).scope().SentMailSoSanhXeCu(email, strTable, idDlr);

        angular.element($(".btnSendEmail")).scope().SentMailSoSanhXeCu(ids, fullname, email, strTable, idDlr);

        //$(".btnSendEmail").addClass("disabled-button");
        $(".btnSendEmail").parent().addClass("disabled-button");
        $("#hdContent_Anylytics").val("");
    } else
        showErrorbyAlert('So sánh xe đã qua sử dụng', "<p>Vui lòng nhập email!<p>", "");
}
/*************************************/