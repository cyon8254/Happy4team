package com.app.milestone.domain;

import com.app.milestone.entity.Service;
import com.app.milestone.entity.Talent;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@Data
@NoArgsConstructor
public class ServiceDTO{
    private LocalDateTime serviceVisitDate;

    public Service toEntity() {
        return Service.builder()
                .serviceVisitDate(serviceVisitDate)
                .build();
    }
}