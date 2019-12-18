package net.fina.presentation.server.presentation.impl;

import net.fina.presentation.server.presentation.api.PresentationThemeService;
import net.fina.presentation.server.presentation.entity.PresentationTheme;
import net.fina.presentation.server.presentation.repository.PresentationThemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public class PresentationThemeServiceImpl implements PresentationThemeService {

    @Autowired
    private PresentationThemeRepository repository;

    @Override
    public Flux<PresentationTheme> load() {
        return repository.findAll();
    }

    @Override
    public Mono<PresentationTheme> getById(String id) {
        return repository.findById(id);
    }

    @Override
    public Mono<PresentationTheme> save(PresentationTheme presentationTheme) {
        return repository.save(presentationTheme);
    }

    @Override
    public Mono<Void> delete(String id) {
        return repository.deleteById(id);
    }
}
