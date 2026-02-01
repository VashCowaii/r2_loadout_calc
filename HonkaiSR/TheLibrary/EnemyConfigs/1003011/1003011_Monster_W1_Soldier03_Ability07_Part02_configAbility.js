const configAbility = {
  "fileName": "1003011_Monster_W1_Soldier03_Ability07_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase2"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 1003011,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Silvermane Lieutenant (Bug)"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Soldier03_HoldShield"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W1_Soldier03_ListenBeingAttacked[<span class=\"descriptionNumberColor\">Counter</span>]"
    },
    "Trigger: Ability End"
  ],
  "references": []
}