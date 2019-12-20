package net.fina.presentation.common;

import net.fina.presentation.security.entity.User;
import net.fina.presentation.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;

import java.util.Arrays;
import java.util.List;

@Component
public class DataInitializer {
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository users;

    @EventListener(value = ContextRefreshedEvent.class)
    public void init() {
        initUsers();
    }

    private void initUsers() {
        this.users
                .deleteAll()
                .thenMany(
                        Flux
                                .just("user", "admin")
                                .flatMap(
                                        username -> {
                                            List<String> roles = "user".equals(username)
                                                    ? Arrays.asList("ROLE_USER")
                                                    : Arrays.asList("ROLE_USER", "ROLE_ADMIN");

                                            User user = User.builder()
                                                    .roles(roles)
                                                    .username(username)
                                                    .password(passwordEncoder.encode("password"))
                                                    .build();
                                            return this.users.save(user);
                                        }
                                )
                )
                .log()
                .subscribe(
                        null,
                        null,
                        () -> System.out.println("asdasd")
                );
    }
}
