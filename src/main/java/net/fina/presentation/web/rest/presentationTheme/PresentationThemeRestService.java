package net.fina.presentation.web.rest.presentationTheme;

import net.fina.presentation.server.presentationTheme.api.PresentationThemeService;
import net.fina.presentation.server.presentationTheme.entity.PresentationTheme;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.security.Principal;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Stream;

@RestController
@RequestMapping("/rest/presentationTheme")
public class PresentationThemeRestService {
    @Autowired
    private PresentationThemeService presentationThemeService;

//    @GetMapping(produces = MediaType.APPLICATION_STREAM_JSON_VALUE)
    @GetMapping
    public Flux<PresentationTheme> load(){
        return presentationThemeService.load();
    }

    @GetMapping("/{id}")
    public Mono<PresentationTheme> getById(@PathVariable String id){
        return presentationThemeService.getById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<PresentationTheme> add(@RequestBody PresentationTheme presentationTheme, Principal principal){
        return presentationThemeService.save(presentationTheme, principal);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public Mono<PresentationTheme> update(@RequestBody  PresentationTheme presentationTheme, Principal principal){
        return presentationThemeService.save(presentationTheme, principal);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable String id){
        presentationThemeService.delete(id);
    }
}
