package net.fina.presentation.security.service;

import net.fina.presentation.security.api.UserService;
import net.fina.presentation.security.entity.Role;
import net.fina.presentation.security.entity.User;
import net.fina.presentation.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

/*
    @Autowired
    private PasswordEncoder passwordEncoder;
*/

    @Override
    public Flux<User> load() {
        return userRepository.findAll();
    }

    @Override
    public Mono<User> getUserById(String id) {
        return userRepository.findById(id);
    }

    @Override
    public Mono<User> getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public Mono<User> addUser(User user) {
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setActive(true);
        return userRepository.save(user);
    }

    @Override
    public Mono<User> updateUser(User user) {

        User oldUser = getUserById(user.getId()).block();

        if (oldUser == null)
            return null;

        if(user.getPassword() == null || "".equals(user.getPassword())){
            user.setPassword(oldUser.getPassword());
        } else {
//            user.setPassword(passwordEncoder.encode(user.getPassword()));
        }

        user.setRoles(oldUser.getRoles());
        user.setActive(oldUser.isActive());

        return userRepository.save(user);
    }

    @Override
    public Mono<Void> deleteUser(User user) {
        return userRepository.delete(user);
    }

    @Override
    public Mono<Void> deleteUserById(String id) {
        return userRepository.deleteById(id);
    }

    @Override
    public Flux<Role> loadRoles() {
        return Flux.fromArray(Role.values());
    }
//TODO ReactiveUserDetailService
/*    @Override
    public Mono<UserDetails> findByUsername(String s) {
        return userRepository.findByUsername(s).map(user -> (UserDetails)user);
    }*/
}
