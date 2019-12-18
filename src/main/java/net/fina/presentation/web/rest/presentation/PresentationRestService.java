package net.fina.presentation.web.rest.presentation;

import net.fina.presentation.server.presentationTheme.api.PresentationThemeService;
import net.fina.presentation.server.presentationTheme.entity.PresentationTheme;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.security.Principal;

@RestController
@RequestMapping("/rest/presentationTheme")
public class PresentationRestService {
    @Autowired
    private PresentationThemeService presentationThemeService;

    @GetMapping(produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<PresentationTheme> loadJobs(){
        return presentationThemeService.load();
    }

    @GetMapping("/{id}")
    public Mono<PresentationTheme> getJobById(@PathVariable String id){
        return presentationThemeService.getById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<PresentationTheme> addJob(PresentationTheme job, Principal principal){
        return presentationThemeService.save(job, principal);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public Mono<PresentationTheme> updateJob(PresentationTheme job, Principal principal){
        return presentationThemeService.save(job, principal);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteJob(@PathVariable String id){
        presentationThemeService.delete(id);
    }
}
