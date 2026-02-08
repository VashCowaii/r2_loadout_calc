const configAbility = {
  "fileName": "8012146_Monster_AML_Boss_Part1_IF_AbilityP01_WeaknessChange",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true
    },
    "Deleted bullshit",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"182974764\">Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part1</a>[<span class=\"descriptionNumberColor\">Quantum Mark</span>]"
    },
    {
      "name": "Deal Toughness DMG",
      "value": {
        "operator": "Variables[0] (SkillEX02_P1_Core_StanceDamageValue) || RETURN",
        "displayLines": "SkillEX02_P1_Core_StanceDamageValue",
        "constants": [],
        "variables": [
          "SkillEX02_P1_Core_StanceDamageValue"
        ]
      },
      "attacker": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "defender": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "forceReduction": true,
      "canDelay": true,
      "ToughnessDMGType": "Imaginary"
    },
    "Trigger: Attack End",
    {
      "name": "Force Entity Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    }
  ],
  "references": []
}