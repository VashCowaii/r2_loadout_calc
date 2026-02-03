const configAbility = {
  "fileName": "8012147_Monster_AML_Boss_Part3_IF_AbilityP01_WeaknessChange",
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
      "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part3[<span class=\"descriptionNumberColor\">Imaginary Mark</span>]"
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
      "ToughnessDMGType": "Quantum"
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