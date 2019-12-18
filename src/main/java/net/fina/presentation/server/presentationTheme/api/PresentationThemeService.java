package net.fina.presentation.server.presentationTheme.api;

import net.fina.presentation.server.presentationTheme.entity.PresentationTheme;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.security.Principal;

@Service
public interface PresentationThemeService {
    Flux<PresentationTheme> load();
    Mono<PresentationTheme> getById(String id);
    Mono<PresentationTheme> save(PresentationTheme presentationTheme, Principal principal);
    Mono<Void> delete(String id);
}
