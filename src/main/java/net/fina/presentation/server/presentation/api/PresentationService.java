package net.fina.presentation.server.presentation.api;

import net.fina.presentation.server.presentation.entity.Presentation;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public interface PresentationService {
    Flux<Presentation> load();
    Mono<Presentation> getById(String id);
    Mono<Presentation> save(Presentation presentation);
    Mono<Void> delete(String id);
}
