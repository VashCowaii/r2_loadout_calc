const configAbility = {
  "fileName": "1002030_Monster_W1_Soldier04_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported_Effect"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W1_Soldier04_AbilityP01_Supporting[<span class=\"descriptionNumberColor\">Support</span>]"
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "CurrentSupportNumber",
      "context": "TargetEntity",
      "value": 1,
      "max": 99
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported_Effect"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Enemy_W1_Soldier04_AbilityP01_Supported[<span class=\"descriptionNumberColor\">Reinforced</span>]"
    },
    "Trigger: Ability End"
  ],
  "references": []
}