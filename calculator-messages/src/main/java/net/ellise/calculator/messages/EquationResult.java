package net.ellise.calculator.messages;

import java.util.UUID;

public record EquationResult(UUID equationId, String equation, double result, String error) {
}
