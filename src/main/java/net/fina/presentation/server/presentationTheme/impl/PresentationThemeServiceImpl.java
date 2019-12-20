package net.fina.presentation.server.presentationTheme.impl;

import net.fina.presentation.security.api.UserService;
import net.fina.presentation.server.presentationTheme.api.PresentationThemeService;
import net.fina.presentation.server.presentationTheme.entity.PresentationTheme;
import net.fina.presentation.server.presentationTheme.repository.PresentationThemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.security.Principal;

@Service
public class PresentationThemeServiceImpl implements PresentationThemeService {

    @Autowired
    private PresentationThemeRepository repository;

    @Autowired
    private UserService userService;

    @Override
    public Flux<PresentationTheme> load() {
        return repository.findAll();
    }

    @Override
    public Mono<PresentationTheme> getById(String id) {
        return repository.findById(id);
    }

    @Override
    public Mono<PresentationTheme> save(PresentationTheme presentationTheme, Principal principal) {

        //userService.getUserByUsername(principal.getName()).subscribe((presentationTheme::setCreator));

        return repository.save(presentationTheme);
    }

    @Override
    public Mono<Void> delete(String id) {
        return repository.deleteById(id);
    }
}
