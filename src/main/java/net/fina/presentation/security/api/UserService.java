package net.fina.presentation.security.api;

import net.fina.presentation.security.entity.Role;
import net.fina.presentation.security.entity.User;
import org.springframework.security.core.userdetails.ReactiveUserDetailsService;
import org.springframework.security.core.userdetails.UserDetailsService;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface UserService{
    Flux<User> load();
    Mono<User> getUserById(String id);
    Mono<User> getUserByUsername(String username);
    Mono<User> addUser(User user);
    Mono<User> updateUser(User user);
    Mono<Void> deleteUser(User user);
    Mono<Void> deleteUserById(String id);
    Flux<Role> loadRoles();

}
