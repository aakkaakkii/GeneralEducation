package net.fina.presentation.server.presentationTheme.entity;

import lombok.*;
import net.fina.presentation.security.entity.User;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PresentationTheme {
    @Id
    private String id;
    private String title;
    private String description;
    private User creator;
}
