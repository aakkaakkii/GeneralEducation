package net.fina.presentation.server.presentation.repository;

import net.fina.presentation.server.presentation.entity.Presentation;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

@Repository
public interface PresentationRepository extends ReactiveMongoRepository<Presentation, String> {
    Mono<Presentation> findById(String id);
    Mono<Void> deleteById(String id);
}
