package net.fina.presentation.server.presentationTheme.repository;

import net.fina.presentation.server.presentationTheme.entity.PresentationTheme;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

@Repository
public interface PresentationThemeRepository extends ReactiveMongoRepository<PresentationTheme, String> {
    Mono<PresentationTheme> findById(String id);
    Mono<Void> deleteById(String id);
}
