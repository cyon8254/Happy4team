package com.app.milestone.entity;

import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name = "TBL_SERVICE")
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Service extends Donation{
    private LocalDateTime serviceVisitDate;

    @Builder
    public Service(int donationCount, int donationReceiveCount, LocalDateTime serviceVisitDate) {
        super(donationCount, donationReceiveCount);
        this.serviceVisitDate = serviceVisitDate;
    }
}