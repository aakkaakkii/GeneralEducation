package net.fina.presentation.server.presentation.impl;

import net.fina.presentation.server.presentation.api.PresentationService;
import net.fina.presentation.server.presentation.entity.Presentation;
import net.fina.presentation.server.presentation.repository.PresentationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class PresentationServiceImpl implements PresentationService {

    @Autowired
    private PresentationRepository repository;

    @Override
    public Flux<Presentation> load() {
        return repository.findAll();
    }

    @Override
    public Mono<Presentation> getById(String id) {
        return repository.findById(id);
    }

    @Override
    public Mono<Presentation> save(Presentation presentationTheme) {
        return repository.save(presentationTheme);
    }

    @Override
    public Mono<Void> delete(String id) {
        return repository.deleteById(id);
    }
}
