package Login.Login.service;

import Login.Login.dto.LoginRequest;
import Login.Login.dto.LoginResponse;
import Login.Login.dto.RegisterRequest;
import Login.Login.entity.User;
import Login.Login.repository.UserRepository;
import Login.Login.security.JwtUtil;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository repo;
    private final BCryptPasswordEncoder encoder;
    private final JwtUtil jwtUtil;

    public AuthService(UserRepository repo,
                       BCryptPasswordEncoder encoder,
                       JwtUtil jwtUtil) {
        this.repo = repo;
        this.encoder = encoder;
        this.jwtUtil = jwtUtil;
    }

    public String register(RegisterRequest request) {

        if (repo.findByEmail(request.getEmail()).isPresent()) {
            return "Email already exists";
        }

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(encoder.encode(request.getPassword()));

        repo.save(user);
        return "User registered successfully";
    }

//    public LoginResponse login(LoginRequest request) {
//
//        User user = repo.findByEmail(request.getEmail())
//                .orElseThrow(() -> new RuntimeException("User not found"));
//
//        if (!encoder.matches(request.getPassword(), user.getPassword())) {
//            throw new RuntimeException("Invalid password");
//        }
//
//        // 🔐 Generate JWT
//        String token = jwtUtil.generateToken(user.getEmail());
//
//        return new LoginResponse(token);
//    }
public LoginResponse login(LoginRequest request) {

    User user = repo.findByEmail(request.getEmail())
            .orElseThrow(() -> new RuntimeException("User not found"));

    if (!encoder.matches(request.getPassword(), user.getPassword())) {
        throw new RuntimeException("Invalid password");
    }

    String token = jwtUtil.generateToken(user.getEmail());
    return new LoginResponse(token);
}

}
