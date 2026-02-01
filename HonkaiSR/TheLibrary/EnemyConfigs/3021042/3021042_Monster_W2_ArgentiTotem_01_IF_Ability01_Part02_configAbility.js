const configAbility = {
  "fileName": "3021042_Monster_W2_ArgentiTotem_01_IF_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value": "PowerFlag"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Enemy_W2_Argenti_IF_EX_PowerUpDark[<span class=\"descriptionNumberColor\">Regain Enhancement</span>]",
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Monster_W2_Argenti_IF_FlowerPower[<span class=\"descriptionNumberColor\">Wreath</span>]",
          "casterAssign": "TargetSelf"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W2_ArgentiTotem_01_IF_Initiate"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W2_Argenti_IF_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
    },
    {
      "name": "Force Entity Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}