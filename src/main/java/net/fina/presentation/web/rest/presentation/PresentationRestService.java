package net.fina.presentation.web.rest.presentation;

import net.fina.presentation.server.presentation.api.PresentationService;
import net.fina.presentation.server.presentation.entity.Presentation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/rest/presentation")
public class PresentationRestService {
    @Autowired
    private PresentationService presentationService;

    @GetMapping(produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Presentation> loadJobs(){
        return presentationService.load();
    }

    @GetMapping("/{id}")
    public Mono<Presentation> getJobById(@PathVariable String id){
        return presentationService.getById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<Presentation> addJob(Presentation presentation){
        return presentationService.save(presentation);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public Mono<Presentation> updateJob(Presentation presentation){
        return presentationService.save(presentation);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteJob(@PathVariable String id){
        presentationService.delete(id);
    }
}
