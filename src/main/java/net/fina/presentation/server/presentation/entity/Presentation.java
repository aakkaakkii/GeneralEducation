package net.fina.presentation.server.presentation.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import net.fina.presentation.security.entity.User;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Presentation {
    @Id
    private String id;
    private User presenter;
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date date;
}
