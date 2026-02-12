const configAbility = {
  "fileName": "4012040_Monster_AML_Minion03_01_Ability01_PassiveSkillInitiate",
  "childAbilityList": [
    "4012040_Monster_AML_Minion03_01_Ability01_PassiveSkillInitiate",
    "4012040_Monster_AML_Minion03_01_Ability01_Camera",
    "4012040_Monster_AML_Minion03_01_Ability01_Part01",
    "4012040_Monster_AML_Minion03_01_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Reconstruct Modifier",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "counter": 1,
      "modifier": "<a class=\"gModGreen\" id=\"-2121778884\">MModifier_Monster_AML_Minion03_01_BattleCry</a>",
      "execute": [],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2121778884\">MModifier_Monster_AML_Minion03_01_BattleCry</a>"
        }
      ]
    }
  ],
  "references": []
}