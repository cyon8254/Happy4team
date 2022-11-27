package com.app.milestone.domain;

import com.app.milestone.embeddable.Address;
import com.app.milestone.embeddable.Introduce;
import com.app.milestone.entity.School;
import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Data
@NoArgsConstructor
public class SchoolDTO {
    private String schoolName;
    //    private Address address;
    private String schoolZipcode;
    private String schoolAddress;
    private String schoolAddressDetail;
    private int schoolTeachers;
    private int schoolKids;
    private int schoolBudget;
    private String schoolBank;
    private String schoolAccount;
    private String schoolPhoneNumber;
    private String schoolQR;
    //    private Introduce introduce;
    private String schoolTitle;
    private String schoolContent;
    private String userEmail;
    private String userName;
    private String userPassword;
    private String userPhoneNumber;
    private String userProfile;
    private int donationCount;


    public School toEntity() {
        Address address = new Address();
        Introduce introduce = new Introduce();
        address.setSchoolZipcode(schoolZipcode);
        address.setSchoolAddress(schoolAddress);
        address.setSchoolAddressDetail(schoolAddressDetail);
        introduce.setSchoolTitle(schoolTitle);
        introduce.setSchoolContent(schoolContent);
        return School.builder()
                .schoolName(schoolName)
                .address(address)
//                .schoolZipcode(schoolZipcode)
//                .schoolAddress(schoolAddress)
//                .schoolAddressDetail(schoolAddressDetail)
                .schoolTeachers(schoolTeachers)
                .schoolKids(schoolKids)
                .schoolBudget(schoolBudget)
                .schoolBank(schoolBank)
                .schoolAccount(schoolAccount)
                .schoolPhoneNumber(schoolPhoneNumber)
                .introduce(introduce)
//                .schoolTitle(schoolTitle)
//                .schoolContent(schoolContent)
                .userEmail(userEmail)
                .userName(userName)
                .userPassword(userPassword)
                .userPhoneNumber(userPhoneNumber)
                .userProfile(userProfile)
                .donationCount(donationCount)
                .build();
    }

    @QueryProjection
    public SchoolDTO(String schoolName, String schoolAddress, String schoolAddressDetail, String schoolZipcode, int schoolTeachers, int schoolKids, int schoolBudget, String schoolBank, String schoolAccount, String schoolPhoneNumber, String schoolQR, String schoolTitle, String schoolContent, String userEmail, String userName, String userPassword, String userPhoneNumber, String userProfile, int donationCount) {
        this.schoolName = schoolName;
        this.schoolAddress = schoolAddress;
        this.schoolAddressDetail = schoolAddressDetail;
        this.schoolZipcode = schoolZipcode;
        this.schoolTeachers = schoolTeachers;
        this.schoolKids = schoolKids;
        this.schoolBudget = schoolBudget;
        this.schoolBank = schoolBank;
        this.schoolAccount = schoolAccount;
        this.schoolPhoneNumber = schoolPhoneNumber;
        this.schoolQR = schoolQR;
        this.schoolTitle = schoolTitle;
        this.schoolContent = schoolContent;
        this.userEmail = userEmail;
        this.userName = userName;
        this.userPassword = userPassword;
        this.userPhoneNumber = userPhoneNumber;
        this.userProfile = userProfile;
        this.donationCount = donationCount;
    }
}
