const configAbility = {
  "fileName": "8015010_Monster_AML_Boss_Passive02",
  "childAbilityList": [
    "8015010_Monster_AML_Boss_Passive02"
  ],
  "skillTrigger": "PassiveSkill02",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_WMonster_W0_Boss_Unselectable[<span class=\"descriptionNumberColor\">Vestige Valor</span>]"
    },
    {
      "name": "Assign Unique Name",
      "uniqueName": "AML_Boss_00",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_IsWeeklyBoss",
        "compareType": "=",
        "value2": 1,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_WMonster_W0_Boss_LockHP_1"
        }
      ],
      "failed": [
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase_SpecialDieEffect"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_WMonster_W0_Boss_ListenAllPartDie"
    }
  ],
  "references": []
}